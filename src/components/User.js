import React, { useContext } from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import LinkIcon from '@material-ui/icons/Link';
import { GithubContext } from '../context/context'
import '../CSS/User.css'

function User() {

    const { user } = useContext(GithubContext);

    const { login, avatar_url, html_url, twitter_username, bio, company, location } = user;

    return (
        <div className="user">
            <div className="user__top">
                <img src={avatar_url} alt={login} className="user__avatar" />
                <div className="user__detail">
                    <div className="user__info">
                        <h4 className="user__name">{login}</h4>
                        <p className="user__twitterHandle">@{twitter_username || login}</p>
                    </div>
                    <a href={html_url} className="user__follow" target="__blank" >Follow</a>
                </div>
            </div>
            <div className="user__bottom">
                <p className="user__bio">{bio || 'Passionate about coding'}</p>
                <div className="user__moreDetail">
                    <BusinessIcon className="user__icon" />
                    <p className="user__company">{company || 'Student'}</p>
                </div>
                <div className="user__moreDetail">
                    <LocationOnIcon className="user__icon" />
                    <p className="user__location">{location || 'Somewhere on earth'}</p>
                </div>

            </div>
        </div>
    )
}

export default User
