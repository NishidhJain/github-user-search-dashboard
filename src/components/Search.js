import React, { useState } from 'react'
// import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import '../CSS/Search.css'

function Search() {

    const userURL = 'https://api.github.com/users/'
    const [query, setQuery] = useState('');

    const searchUser = async (searchUserName) => {

        let searchQuery = userURL + searchUserName;
        console.log(searchQuery);
        let response = await fetch(searchQuery);
        let res = await response.json();
        console.log(res);
    }

    const handleSubmit = (e) => {
        // to stop page from refreshing
        e.preventDefault();
        console.log(query);
        // searchUser(query);

        // clear the input field
        setQuery('');
    };


    return (
        <div className="search__container">
            <form action="" onSubmit={handleSubmit} className="search__form" >
                <SearchIcon className="search__icon" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search user" className="search__input" />
                <button className="search__button" disabled={!query}>Search</button>
                {/* <Button variant="contained" color="primary" disabled={!query} className="search__btn" size="large" >
                    Search
                </Button> */}
            </form>
        </div>
    )
}

export default Search
