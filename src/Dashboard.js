import React from 'react'
import Search from './components/Search'
import Info from './components/Info';
import User from './components/User'
import Repos from './components/Repos';
// import userNotFound from './notFound.svg';
import userNotFound from './404-Not-Found.svg';
import { GithubContext } from "./context/context";

function Dashboard() {

    const { isLoading, error } = React.useContext(GithubContext);

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
                { (error.message === 'User not found') ? (
                    <div className="not-found">
                        <img src={userNotFound} alt="User Not Found" className='not-found__img' />
                        <h3 className="error__msg">Oops!! No user found with this name.</h3>
                    </div>
                ) : (
                        <>

                            <Info />
                            <User />
                            <Repos />
                        </>
                    )}

            </>
        )
    }

}

export default Dashboard
