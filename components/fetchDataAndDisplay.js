// fetchDataAndDisplay.js
import fetchBeers from './Api';
import displayBeers from './Display';

async function fetchDataAndDisplay() {
    try {
        const beers = await fetchBeers();
        displayBeers(beers);
    } catch (error) {
        console.error('Error in fetchDataAndDisplay:', error);
    }
}

export default fetchDataAndDisplay;
