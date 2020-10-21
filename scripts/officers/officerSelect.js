import { getOfficers, useOfficers } from "./officerProvider.js"

const copTarget = document.querySelector(".filters__officer")

const render = officersCollection => {

    copTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select a cop...</option>
            ${officersCollection.map(
                    officerObject => {
                    return `<option value="${officerObject.id}">${officerObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


export const officerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                copThatWasChosen: parseInt(changeEvent.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

