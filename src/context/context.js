import React, { useState, createContext, useEffect } from 'react'
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
    const [request, setRequest] = useState(0);



    const checkRequests = async () => {
        await fetch(`${rootURL}/rate_limit`)
            .then((response) => response.json())
            .then((res) => setRequest(res.rate.remaining))
            .catch((err) => console.log('err in getting remaining requests', err));

    };

    useEffect(checkRequests);

    const findGithubUser = async (userName) => {
        // console.log('findGithubUser');
        // toggleError
        // setLoading
        setIsLoading(true);

        let json_response = {};

        await fetch(`${rootURL}/users/${userName}`)
            .then((response) => response.json())
            .then((res) => json_response = res)
            .catch((err) => console.log('err in fetching user', err));

        console.log(json_response);

        if (json_response.login) {

            let json_repo_response = {};

            console.log('User received');
            setUser(json_response);

            await fetch(`${json_response.repos_url}?per_page=100`)
                .then((res) => res.json())
                .then((response) => json_repo_response = response)
                .catch((err) => console.log('err in repo', err));

            setRepos(json_repo_response);
        }
        else {
            console.log('err', json_response.message);
        }

        setIsLoading(false);

    };


    return (
        <GithubContext.Provider value={{ user, repos, followers, findGithubUser, isLoading, request }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
