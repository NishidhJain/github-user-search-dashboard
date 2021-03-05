import React from 'react'
import HelloImg from '../assets/AstronautImg.png';
import '../CSS/Home.css';

function Home() {
    return (
        <div className="home">
            <img src={HelloImg} alt="astronaut saying hello" className="home__img" />
            <h2 className="home__heading">Hello Folks!!!</h2>

            <p className="home__description">Github User Dashboard is created to easily find any github user and know the details about the user. You will get the public repos details, followers, following, gists about the user. Also, you can see the most stars language, most used language etc in chart form.</p>
        </div>
    )
}

export default Home
