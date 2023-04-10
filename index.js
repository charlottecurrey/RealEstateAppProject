
// container of all inputls
const userInputs = document.querySelector("#user-inputs");

// submit button
const listingButton = document.querySelector("form");
const listingsList = document.createElement("ul");

//appending
listingDisplay.appendChild(listingsList);


const houseListing = [];
listingButton.addEventListener("submit", (event) => {
  event.preventDefault();
  //user inputs

  const houseType = document.querySelector("#type").value;
  const housePrice = document.querySelector("#price").value;
  const houseState = document.querySelector("#state").value;
  const houseAddress = document.querySelector("#address").value;
  const numBedrooms = document.querySelector("#bedrooms").value;
  const numBathrooms = document.querySelector("#bathrooms").value;
  const squareFootage = document.querySelector("#square-footage").value;
  //reset input values
  document.querySelector("#type").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#state").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#bedrooms").value = "";
  document.querySelector("#bathrooms").value = "";
  document.querySelector("#square-footage").value = "";
  
  const listing = {
    houseType: houseType,
    housePrice: housePrice,
    houseState: houseState,
    houseAddress: houseAddress,
    numBedrooms: numBedrooms,
    numBathrooms: numBathrooms,
    squareFootage: squareFootage,
  }
  const houseContainer = document.createElement("div");
  

  listingsList.appendChild(houseContainer);
  houseListing.push(listing);
  renderListings()
});


function renderListings() {
  listingDisplay.innerHTML = '';
  const listingElement = document.createElement("li");
  houseListing.forEach((listing) => {
    listingElement.innerHTML = `
      <h2>${listing.houseAddress}</h2>
      <p>Property Type: ${listing.houseType}</p>
      <p>City: ${listing.housePrice}</p>
      <p>State: ${listing.houseState}</p>
    `;
    listingsList.appendChild(listingElement);
  });
}

