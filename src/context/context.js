import React, { useState, createContext, useEffect } from 'react'

const rootURL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [request, setRequest] = useState(0);
    const [error, setError] = useState({ show: false, message: '' });

    const checkRequests = async () => {

        try {
            const resp = await fetch(`${rootURL}/rate_limit`);
            const jsonResp = await resp.json();

            setRequest(jsonResp.rate.remaining);

            if (jsonResp.rate.remaining === 0) {
                setError({ show: true, message: 'You have exceeded the hourly request rate limit' });
            }
        }
        catch (err) {
            console.log('err in fetching remaining requests :', err);
        }

    };

    useEffect(checkRequests);

    const findGithubUser = async (userName) => {
        // console.log('findGithubUser');
        // toggleError
        // setLoading
        setError({ show: false, message: '' });
        setIsLoading(true);

        try {
            const userResponse = await fetch(`${rootURL}/users/${userName}`);
            const jsonUser = await userResponse.json();

            // console.log('User received: ', jsonUser);

            setUser(jsonUser);
            // if the user exists
            if (jsonUser.login) {
                // console.log('User exists');
                // setUser(jsonUser);

                //we also want repository data of user

                try {
                    const reposData = await fetch(`${jsonUser.repos_url}?per_page=100`);
                    const reposJson = await reposData.json();

                    // console.log('repos received :', reposJson);
                    setRepos(reposJson);
                }
                catch (err) {
                    console.log('Error in fetching repos : ', err);
                }
            }
            else {
                // user does not exists
                // console.log('User does not exists');
                setError({ show: false, message: 'User not found' });
            }
        }
        catch (err) {
            console.log('err in fetching user', err);
        }

        setIsLoading(false);

    };

    return (
        <GithubContext.Provider value={{ user, repos, findGithubUser, isLoading, request, error }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
