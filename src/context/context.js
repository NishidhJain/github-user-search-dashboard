import React, { useState, createContext } from 'react'
import DefaultUser from './DefaultUserData/DefaultUser'
import DefaultFollowers from './DefaultUserData/DefaultFollowers'
import DefaultRepos from './DefaultUserData/DefaultRepos'

const rootURL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const [user, setUser] = useState(DefaultUser);
    const [repos, setRepos] = useState(DefaultRepos);
    const [followers, setFollowers] = useState(DefaultFollowers);
    const [isLoading, setIsLoading] = useState(false);

    const findGithubUser = async (userName) => {
        // console.log('findGithubUser');
        // toggleError
        // setLoading
        setIsLoading(true);

        let json_response = {};

        await fetch(`${rootURL}/users/${userName}`)
            .then((response) => response.json())
            .then((res) => json_response = res)
            .catch((err) => console.log('err'));

        console.log(json_response);

        if (json_response.login) {
            console.log('User received');
            setUser(json_response);
        }
        else {
            console.log('err', json_response.message);
        }

        setIsLoading(false);


        // try {
        //     let searchUser = await fetch(`${endURL}/users/${userName}`);
        //     let jsonData = await searchUser.json();
        //     console.log(jsonData);
        // }
        // catch (err) {
        //     console.log('err', err);
        // }


    };



    return (
        <GithubContext.Provider value={{ user, repos, followers, findGithubUser, isLoading }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
