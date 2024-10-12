const nav = document.querySelector('.navigation')
const button = document.querySelector('#menu');


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	  },
	  {
		templeName: "Manaus Brazil Temple",
		location: "Manaus, Brazil",
		dedicated: "2012, June, 10",
		area: 32032,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-16199.jpg"
	  },
	  {
		templeName: "São Paulo Brazil Temple",
		location: "São Paulo, Brazil",
		dedicated: "1978, October 30 - November 2",
		area: 59246,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
	  },
	  {
		templeName: "Salvador Brazil Temple",
		location: "Salvador, Brazil",
		dedicated: "2024, October, 20",
		area: 116642,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
	  },
	
  ];



button.addEventListener('click', () => {
	nav.classList.toggle('show');
	button.classList.toggle('show');
});

const templeContainer = document.getElementById('temple-container');


function displayTemples(templesToDisplay) {
    templeContainer.innerHTML = ''; 
    templesToDisplay.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card'; 
        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeContainer.appendChild(templeCard);
    });
}


nav.addEventListener('click', (event) => {
    const filter = event.target.textContent;
    let filteredTemples;

    switch (filter) {
        case 'Old':
            filteredTemples = temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'));
            break;
        case 'New':
            filteredTemples = temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'));
            break;
        case 'Large':
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples; 
    }

    displayTemples(filteredTemples);
});


displayTemples(temples);


button.addEventListener('click', () => {
    nav.classList.toggle('show');
    button.classList.toggle('show');
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

