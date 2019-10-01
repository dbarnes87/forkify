import axios from 'axios';

async function getResults(query) {
    const key = 'b8c5eecaa2ad09375fcf9240997eee57'
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('tomato pasta');

// b8c5eecaa2ad09375fcf9240997eee57
// https://www.food2fork.com/api/search
