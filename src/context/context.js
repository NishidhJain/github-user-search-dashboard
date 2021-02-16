import React, { useState, createContext, useEffect } from 'react'
import DefaultUser from './DefaultUserData/DefaultUser'
// import DefaultFollowers from './DefaultUserData/DefaultFollowers'
import DefaultRepos from './DefaultUserData/DefaultRepos'

const rootURL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const [user, setUser] = useState(DefaultUser);
    const [repos, setRepos] = useState(DefaultRepos);
    // const [followers, setFollowers] = useState(DefaultFollowers);
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

        // await fetch(`${rootURL}/rate_limit`)
        //     .then((response) => response.json())
        //     .then((res) => {
        //         setRequest(res.rate.remaining)
        //         if (res.rate.remaining === 0) {
        //             setError({ show: true, message: 'You have exceeded the hourly request rate limit' });
        //         }
        //     })
        //     .catch((err) => console.log('err in getting remaining requests', err));
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

            console.log('User received: ', jsonUser);

            // if the user exists
            if (jsonUser.login) {
                console.log('User exists');
                setUser(jsonUser);

                //we also want repository data of user

                try {
                    const reposData = await fetch(`${jsonUser.repos_url}?per_page=100`);
                    const reposJson = await reposData.json();

                    console.log('repos received :', reposJson);
                    setRepos(reposJson);
                }
                catch (err) {
                    console.log('Error in fetching repos : ', err);
                }
            }
            else {
                // user does not exists
                console.log('User does not exists');
                setError({ show: false, message: 'User not found' });
            }
        }
        catch (err) {
            console.log('err in fetching user', err);
        }

        // let json_response = {};

        // await fetch(`${rootURL}/users/${userName}`)
        //     .then((response) => response.json())
        //     .then((res) => json_response = res)
        //     .catch((err) => console.log('err in fetching user', err));

        // console.log('User', json_response);


        // check if we have received the response or any (Network err) has occured
        // if (json_response) {

        //     // check if user is found or not
        //     if (json_response.login) {

        //         let json_repo_response = {};

        //         console.log('User received');
        //         setUser(json_response);

        //         await fetch(`${json_response.repos_url}?per_page=100`)
        //             .then((res) => res.json())
        //             .then((response) => json_repo_response = response)
        //             .catch((err) => console.log('err in repo', err));

        //         setRepos(json_repo_response);
        //     }
        //     else {
        //         console.log('err', json_response.message);
        //         setError({ show: false, message: 'User not found' })
        //     }
        // }


        setIsLoading(false);

    };


    return (
        <GithubContext.Provider value={{ user, repos, findGithubUser, isLoading, request, error }}>
            {children}
        </GithubContext.Provider>
    );
}

export { GithubContext, GithubProvider }
