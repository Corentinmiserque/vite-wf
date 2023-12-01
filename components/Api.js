// api.js
export default function fetchBeers() {
    return fetch('https://api.punkapi.com/v2/beers?per_page=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching beers:', error);
            throw error;
        });
}
