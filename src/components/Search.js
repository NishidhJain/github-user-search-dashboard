import React, { useState, useContext } from 'react'
// import Button from '@material-ui/core/Button'
import { GithubContext } from '../context/context'
import SearchIcon from '@material-ui/icons/Search';
import '../CSS/Search.css'

function Search() {

    const { findGithubUser, request } = useContext(GithubContext);
    const [query, setQuery] = useState('');

    // const searchUser = async (searchUserName) => {

    //     let searchQuery = userURL + searchUserName;
    //     console.log(searchQuery);
    //     let response = await fetch(searchQuery);
    //     let res = await response.json();
    //     setUser(res);
    //     console.log(res);
    // }

    const handleSubmit = (e) => {
        // to stop page from refreshing
        e.preventDefault();
        // console.log(query);
        // searchUser(query);
        findGithubUser(query);

        // clear the input field
        setQuery('');
    };

    return (
        <div className="search__container">
            <form onSubmit={handleSubmit} className="search__form" >
                <SearchIcon className="search__icon" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search user" className="search__input" />
                <button className="search__button" disabled={!query} type="submit">Search</button>
                {/* <Button variant="contained" color="primary" disabled={!query} className="search__btn" size="large" >
                    Search
                </Button> */}
            </form>
            <h3>{`Requests Remaining : ${request} / hour`} </h3>
        </div>
    )
}

export default Search
