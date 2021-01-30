import React, { useState, createContext } from 'react'
import DefaultUser from './DefaultUserData/DefaultUser'
import DefaultFollowers from './DefaultUserData/DefaultFollowers'
import DefaultRepos from './DefaultUserData/DefaultRepos'

const url = 'https://api.github.com';

const GithubContext = createContext();

const [user, setUser] = useState(DefaultUser);
const [repos, setRepos] = useState(DefaultRepos);
const [followers, setFollowers] = useState(DefaultFollowers);

const GithubProvider = ({ children }) => {
    return (
        <GithubContext.Provider value={{ user }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
