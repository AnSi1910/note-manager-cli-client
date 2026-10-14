import React from 'react';
import '../styles/SearchBar.scss';

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Пошук нотаток..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}