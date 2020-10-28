const witnessElement = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {

witnessElement.innerHTML = `
    <button id="display-witnesses-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-witnesses-button") {
        const witnessButtonClicked = new CustomEvent("witnessButtonClicked") 
        eventHub.dispatchEvent(witnessButtonClicked)
    }
})

