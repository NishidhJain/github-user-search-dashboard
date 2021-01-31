import React, { useContext } from 'react'
import '../CSS/Info.css'
import { GithubContext } from '../context/context';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const SingleInfo = ({ icon, label, value, color }) => {

    return (
        <div className="info__container">
            <span className={color}>{icon}</span>
            <div className="info__detail" >
                <h2 className="info__number">{value}</h2>
                <p className="info__name">{label}</p>
            </div>
        </div>
    );
}

function Info() {

    const { user } = useContext(GithubContext);

    let infoDetails = [
        {
            id: 1,
            icon: <LibraryBooksIcon className='info__icon' />,
            label: 'Repos',
            value: user.public_repos,
            color: 'green'
        },
        {
            id: 2,
            icon: <GroupIcon className='info__icon' />,
            label: 'Followers',
            value: user.followers,
            color: 'red'
        },
        {
            id: 3,
            icon: <PersonAddIcon className='info__icon' />,
            label: 'Following',
            value: user.following,
            color: 'blue'
        },
        {
            id: 4,
            icon: <ListAltIcon className='info__icon' />,
            label: 'Gists',
            value: user.public_gists,
            color: 'orange'
        }
    ];


    return (
        <div className="info">
            { infoDetails.map((info) => {
                return (
                    <SingleInfo key={info.id} {...info} />
                )
            })}
        </div>
    )
}

export default Info
