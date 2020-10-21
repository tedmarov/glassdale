import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"
import { useOfficers } from "../officers/officerProvider.js"

const criminalElement = document.querySelector(".criminals__list")

const eventHub = document.querySelector(".container")


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
        }        
        criminalElement.innerHTML = `
        <h3>DA BAD CONVIKSHUNZ</h3>
        <div class="criminal__properties">
        ${criminalHTML}
        </div>
        `
    }
})

eventHub.addEventListener("officerSelected", event => {
    if(event.detail.officerSelect !==0) {
        const criminalsArray = useCriminals()

        const officersArray = useOfficers()

        const officerThatWasChosen = officersArray.find(officerObject => {
            return officerObject.id === event.detail.copThatWasChosen
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObject => {
            return criminalObject.arrestingOfficer === officerThatWasChosen.name
        })

        let criminalHTML = ""
        for (const criminal of filteredCriminalsArray) {
            criminalHTML += Criminal(criminal)
        }
        criminalElement.innerHTML =`
        <h3>DA BAD OFFICERZ</h3>
        <div class="criminal__properties">
        ${criminalHTML}
        </div>
        `
    }
})

/*
Then invoke render() and pass the filtered collection as
an argument
*/



export const criminalList = () => {
    getCriminals().then(() => {
        
    }
    )

}
