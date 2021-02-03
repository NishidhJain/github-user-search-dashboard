import React, { useContext } from 'react'
import Pie3D from '../Charts/Pie3D';
import { GithubContext } from '../context/context';
import '../CSS/Repos.css';

function Repos() {

    const { repos } = useContext(GithubContext);

    let languages = repos.reduce((total, currItem) => {

        const { language } = currItem;

        // check if the value of language is not null
        if (!language) {
            return total;
        }

        //Calculate the number of repositries with particular language
        if (total[language]) {
            total[language] = { ...total[language], value: total[language].value + 1 };
        }
        else {
            total[language] = { label: language, value: 1 };
        }

        return total;
    }, {})

    // we have languages as object but we want it as an array

    console.log(languages);

    languages = Object.values(languages);

    // now we want to display top 5 languages only, so for that we have to sort the array and slice it

    languages = languages.sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5);

    console.log(languages);

    return (
        <div className="repos">
            <Pie3D data={languages} />
            <div>
                jashfj
            </div>
        </div>
    )
}

export default Repos
