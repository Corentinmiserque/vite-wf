// display.js
export default function displayBeers(beers) {
    const beerList = document.getElementById('beerList');
    let totalABV = 0;

    beers.forEach(beer => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${beer.name}</strong> ${beer.abv}%`;
        beerList.appendChild(listItem);

        totalABV += beer.abv;
    });

    const averageABV = totalABV / beers.length;
    const averageABVElement = document.createElement('p');
    averageABVElement.innerHTML = `Average ABV: ${averageABV.toFixed(2)}%`;
    beerList.appendChild(averageABVElement);
}
