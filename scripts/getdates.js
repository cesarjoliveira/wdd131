// select the DOM elements for output
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

lastModified.innerHTML = `<span class="lastModified">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}</span>`;

currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;
