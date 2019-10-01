import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }


    async getResults() {
        const key = 'b8c5eecaa2ad09375fcf9240997eee57'
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}