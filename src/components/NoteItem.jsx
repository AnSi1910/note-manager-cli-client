import React from 'react';
import '../styles/NoteItem.scss';

export default function NoteItem({ note, onDelete }) {
    return (
        <div className="note-item">
            <div className="note-header">
                <h3>{note.title}</h3>
                <span className="category-badge">
                    {note.Category ? note.Category.title : 'Загальна'}
                </span>
            </div>
            <p>{note.content}</p>
            <button className="delete-btn" onClick={() => onDelete(note.id)}>
                Видалити
            </button>
        </div>
    );
}