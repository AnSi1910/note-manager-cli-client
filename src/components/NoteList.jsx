import React from 'react';
import NoteItem from './NoteItem';
import '../styles/NoteList.scss';

export default function NoteList({ notes, onDelete }) {
    if (!notes.length) {
        return <p className="empty-text">Список нотаток порожній</p>;
    }

    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
}