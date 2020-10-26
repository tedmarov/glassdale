import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"

const eventHub = document.querySelector(".container")

const criminalElement = document.querySelector(".criminalsContainer")

export const criminalList = () => {
    getCriminals().then(() => {
        // const criminalArray = useCriminals()
        // render(criminalArray)        
    })
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    
    /*
    Filter the criminals application state down to the people that committed the crime
        */
       
    if(event.detail.crimeSelect !== 0) {
           
        const criminalsArray = useCriminals()
           
        const convictionsArray = useConvictions()
        
        const convictionThatWasChosen = convictionsArray.find(convictionObject => {
            return convictionObject.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObject => {
            return criminalObject.conviction === convictionThatWasChosen.name
        })
        
        let criminalHTML = ""
        for (const criminal of filteredCriminalsArray) {
            criminalHTML += Criminal(criminal)
            criminalElement.innerHTML = `
            <h3>BY DA CONVIKSHUNZ</h3>
            <div class="criminalsList">
            ${criminalHTML}
            </div>
            `
        }        
    }
})

eventHub.addEventListener("officerSelected", officerSelectedObject => {
    const selectedOfficerName = officerSelectedObject.detail.copThatWasChosen
    
        const criminalsArray = useCriminals()

        const filteredCriminalsArray = criminalsArray.filter(
            (criminalObject) => {
            return criminalObject.arrestingOfficer === selectedOfficerName  
        })

        render(filteredCriminalsArray)
    }
)

/*
Then invoke render() and pass the filtered collection as
an argument
*/

const render = (criminalsArray) => {
    let criminalHTML = ""
    for (const criminal of criminalsArray) {
        criminalHTML += Criminal(criminal)
        criminalElement.innerHTML = `
        <h3>BY DA COPZ</h3>
        <div class="criminalsList">
        ${criminalHTML}
        </div>
        `
    }
}        