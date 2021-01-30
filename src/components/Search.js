import React, { useState } from 'react'
import '../CSS/Search.css'

function Search() {

    const [query, setQuery] = useState('');

    const submit = (e) => {
        // to stop page from refreshing
        e.preventDefault();
        console.log(query);

        // clear the input field
        setQuery('');
    };


    return (
        <div className="search__container">
            <form action="" onSubmit={submit} className="search__form" >
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search user" className="search__input" />
                <button className="search__button" disabled={!query} >Search</button>
            </form>
        </div>
    )
}

export default Search
