import React, { useState } from 'react';
import '../styles/NoteForm.scss';

export default function NoteForm({ categories, onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(categories[0]?.id || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        onAddNote({
            title,
            content,
            CategoryId: categoryId ? Number(categoryId) : null
        });

        setTitle('');
        setContent('');
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h3>Додати нотатку</h3>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Вміст нотатки..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            >
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.title}
                    </option>
                ))}
            </select>
            <button type="submit">Зберегти нотатку</button>
        </form>
    );
}