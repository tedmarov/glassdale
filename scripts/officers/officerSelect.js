import { getOfficers, useOfficers } from "./officerProvider.js"

const copTarget = document.querySelector(".filters__officer")

const render = officers => {

    copTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select a cop...</option>
            ${officers.map(
                    officerObject => {
                    return `<option value="${officerObject.name}">${officerObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


export const officerSelect = () => {
    getOfficers()
        .then(() => {
            const officersArray = useOfficers()
            render(officersArray)
        })
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                copThatWasChosen: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

