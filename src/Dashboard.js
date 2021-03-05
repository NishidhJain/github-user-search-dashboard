import React, { Suspense, lazy } from 'react'
import Search from './components/Search'
import userNotFound from './assets/404-Not-Found.svg';
import { GithubContext } from "./context/context";
import Home from './components/Home';
const Info = lazy(() => import('./components/Info'));
const User = lazy(() => import('./components/User'));
const Repos = lazy(() => import('./components/Repos'));
// import Info from './components/Info';
// import User from './components/User'
// import Repos from './components/Repos';

const waitForSec = () => <p>Wait for some time...</p>;

function Dashboard() {

    const { isLoading, error, user } = React.useContext(GithubContext);

    const DataFound = () => {
        return (
            <>
                { (error.message === 'User not found') ? (
                    <div className="not-found">
                        <img src={userNotFound} alt="User Not Found" className='not-found__img' />
                        <h3 className="error__msg">Oops!! No user found with this name.</h3>
                    </div>
                ) : (
                    <>
                        <Suspense fallback={waitForSec()} >
                            <Info />
                            <User />
                            <Repos />
                        </Suspense>
                    </>
                )
                }
            </>
        );
    };

    return (
        <>
            <Search />
            { user
                ? (isLoading ? (<h2 className="loading">Loading...</h2>) : <DataFound />)
                : <Home />
            }
        </>
    );

    // if (isLoading) {
    //     return (
    //         <>
    //             <Search />
    //             <h2 className="loading">Loading...</h2>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <Search />

    //             { (error.message === 'User not found') ? (
    //                 <div className="not-found">
    //                     <img src={userNotFound} alt="User Not Found" className='not-found__img' />
    //                     <h3 className="error__msg">Oops!! No user found with this name.</h3>
    //                 </div>
    //             ) : (
    //                     <>

    //                         <Info />
    //                         <User />
    //                         <Repos />
    //                     </>
    //                 )
    //             }
    //         </>
    //     )
    // }

}

export default Dashboard
