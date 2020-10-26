import { Officer } from "./officer.js"
import { getOfficers, useOfficers } from "./officerProvider.js"




const officerElement = document.querySelector(".officersContainer")

export const officerList = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers()

        let officerHTML = ""
        
        for (const officer of officerArray) {
        
        officerHTML += Officer(officer)

        officerElement.innerHTML = `
        <h2>DA COPZ</h2>
        <section class="officersList">
            ${officerHTML}
        </section>
        `
    }
})
}