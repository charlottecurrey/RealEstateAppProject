const userInputs = document.querySelector("#user-inputs");
const houseType = document.querySelector("#type");
const housePrice = document.querySelector("#house");
const houseState = document.querySelector("#state");
const houseAddress = document.querySelector("#address");
const numBedrooms = document.querySelector("#bedrooms");
const numBathrooms = document.querySelector("#bathrooms");
const squareFootage = document.querySelector("#square-footage");
const listingButton = document.querySelector("#submit");

const houseListing = [];

const buildAHouse = () => {
  listingsList.innerHTML = "";
  houseListing.forEach((listing) => {
    const li = document.createElement("li");
    li.appendChild(createListing(listing));
    listingsList.appendChild(li);
    console.log("house:", houseListing);
  });
};

listingButton.addEventListener("click", function () {});

function createListing(newHouse) {
  const listingsList = document.createElement("ul");
  for (const key in newHouse) {
    const listItem = document.createElement("li");
    listItem.textContent = `${key}: ${[newHouse]}`;
    listingsList.appendChild(listItem);
  }
}
