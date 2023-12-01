// display.js
export default function displayBeers(beers) {
    const beerList = document.getElementById('beerList');
    let beerListHTML = '';
    let totalABV = 0;

    beers.forEach(beer => {
        beerListHTML += `<li><strong>${beer.name}</strong> ${beer.abv}%</li>`;
        totalABV += beer.abv;
    });

    const averageABV = totalABV / beers.length;
    beerListHTML += `<p>Average ABV: ${averageABV.toFixed(2)}%</p>`;

    beerList.innerHTML = beerListHTML;
}

