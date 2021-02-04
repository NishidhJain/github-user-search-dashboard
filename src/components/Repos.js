import React, { useContext } from 'react'
import Bar3D from '../Charts/Bar3D';
import Column3D from '../Charts/Column3D';
import Doughnut2D from '../Charts/Doughnut2D';
import Pie3D from '../Charts/Pie3D';
import { GithubContext } from '../context/context';
import '../CSS/Repos.css';

function Repos() {

    const { repos } = useContext(GithubContext);

    let languages = repos.reduce((total, currItem) => {

        const { language, stargazers_count } = currItem;

        // check if the value of language is not null
        if (!language) {
            return total;
        }

        //Calculate the number of repositries with particular language
        if (total[language]) {
            total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count };
        }
        else {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        }

        return total;
    }, {})

    // we have languages as object but we want it as an array

    let mostUsedLanguage = Object.values(languages);

    // now we want to display top 5 languages only, so for that we have to sort the array and slice it
    mostUsedLanguage = mostUsedLanguage.sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5);

    console.log('mostUsed language', mostUsedLanguage);

    // for stars
    let mostStars = Object.values(languages).sort((a, b) => {
        return b.stars - a.stars;
    });

    // change the 'value' key with value of stars
    mostStars = mostStars.map((item) => {
        return { ...item, value: item.stars };
    }).slice(0, 5);

    console.log('most stars', mostStars);


    // stars and forks
    let { stars, forks } = repos.reduce((total, currItem) => {

        let { stargazers_count, forks, name } = currItem;

        total.stars[stargazers_count] = { label: name, value: stargazers_count };

        total.forks[forks] = { label: name, value: forks };

        return total;
    }, { stars: {}, forks: {} });

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();

    console.log('stars', stars);

    return (
        <div className="repos">
            <Pie3D data={mostUsedLanguage} />
            <Column3D data={stars} />
            <Doughnut2D data={mostStars} />
            <Bar3D data={forks} />
        </div>
    )
}

export default Repos
