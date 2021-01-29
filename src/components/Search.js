import React, { useState } from 'react'

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
        <div>
            <form action="" onSubmit={submit} >
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search user" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search
