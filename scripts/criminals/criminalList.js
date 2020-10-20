import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"

const criminalElement = document.querySelector(".criminals__list")
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("convictionChosen", customEvent => {
//     const convictionName = customEvent.detail.nameOfChosenConviction

//     const convictionsByCriminal = getConvictionsByCriminal(convictionName)
//     render(convictionsByCriminal)
// })

export const criminalList = () => {
    getCriminals().then(() => {
        const appStateCriminals = useCriminals()
        let criminalHTML = ""
        for (const criminal of appStateCriminals) {
            criminalHTML += Criminal(criminal)
        }
        
        criminalElement.innerHTML += `
        <div class="criminal__properties">
            ${criminalHTML}
        </div>`
    }
    )

}
