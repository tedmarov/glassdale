const facilityElement = document.querySelector(".buttons__facilities")
const eventHub = document.querySelector(".container")

export const renderFacilityButton = () => {

facilityElement.innerHTML = `
    <button id="display-facilities-button">List Facilities</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-facilities-button") {
        const facilityButtonClicked = new CustomEvent("facilityButtonClicked") 
        eventHub.dispatchEvent(facilityButtonClicked)
    }
}
)

