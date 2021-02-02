import React, { useState, createContext } from 'react'
import DefaultUser from './DefaultUserData/DefaultUser'
import DefaultFollowers from './DefaultUserData/DefaultFollowers'
import DefaultRepos from './DefaultUserData/DefaultRepos'

const endURL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const [user, setUser] = useState(DefaultUser);
    const [repos, setRepos] = useState(DefaultRepos);
    const [followers, setFollowers] = useState(DefaultFollowers);

    return (
        <GithubContext.Provider value={{ user, repos, followers, setUser }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
