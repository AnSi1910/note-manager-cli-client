import React, { useState } from 'react';
import '../styles/CategoryForm.scss';

export default function CategoryForm({ onAddCategory }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAddCategory({ title });
        setTitle('');
    };

    return (
        <form className="category-form" onSubmit={handleSubmit}>
            <h3>Нова категорія</h3>
            <input
                type="text"
                placeholder="Назва категорії"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
}