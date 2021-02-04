import React from 'react'
import Search from './components/Search'
import Info from './components/Info';
import User from './components/User'
import Repos from './components/Repos';
import { GithubContext } from "./context/context";

function Dashboard() {

    const { isLoading } = React.useContext(GithubContext);

    if (isLoading) {
        return (
            <>
                <Search />
                <h2 className="loading">Loading...</h2>
            </>
        )
    }
    else {
        return (
            <>
                <Search />
                <Info />
                <User />
                <Repos />
            </>
        )
    }

}

export default Dashboard
