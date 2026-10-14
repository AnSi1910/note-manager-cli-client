import React, { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNote, getCategories, createCategory } from './services/api';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import CategoryForm from './components/CategoryForm';
import SearchBar from './components/SearchBar';
import './styles/main.scss';

export default function App() {
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([]);
    // Використання браузерного API (localStorage)
    const [search, setSearch] = useState(() => {
        return localStorage.getItem('noteSearch') || '';
    });

    useEffect(() => {
        localStorage.setItem('noteSearch', search);
    }, [search]);

    const loadData = async () => {
        try {
            const notesData = await getNotes(search);
            const categoriesData = await getCategories();
            setNotes(notesData);
            setCategories(categoriesData);
        } catch (error) {
            console.error('Помилка завантаження даних:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, [search]);

    const handleAddNote = async (noteData) => {
        await createNote(noteData);
        loadData();
    };

    const handleDeleteNote = async (id) => {
        await deleteNote(id);
        loadData();
    };

    const handleAddCategory = async (categoryData) => {
        await createCategory(categoryData);
        loadData();
    };

    return (
        <div className="app-container">
            <header>
                <h1>Менеджер нотаток</h1>
            </header>
            <main>
                <aside>
                    <CategoryForm onAddCategory={handleAddCategory} />
                    <NoteForm categories={categories} onAddNote={handleAddNote} />
                </aside>
                <section className="content-section">
                    <SearchBar search={search} setSearch={setSearch} />
                    <NoteList notes={notes} onDelete={handleDeleteNote} />
                </section>
            </main>
        </div>
    );
}