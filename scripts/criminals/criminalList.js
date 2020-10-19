import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"


const criminalElement = document.querySelector(".criminalsContainer")

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

