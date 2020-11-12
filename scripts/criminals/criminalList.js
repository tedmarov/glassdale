import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"
import { getFacilities, useFacilities } from "../facilities/facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/criminalFacilityProvider.js"

const eventHub = document.querySelector(".container")

const criminalElement = document.querySelector(".caseDataContainer")

let criminalArray = []
let facilityArray = []
let criminalFacilitiesArray = []

export const criminalList = () => {
    // getCriminals()
    // .then(
        getFacilities()
    .then(getCriminalFacilities)
    .then(
        () => {
            criminalArray = useCriminals()
            facilityArray = useFacilities()
            criminalFacilitiesArray = useCriminalFacilities()
            //If rendering all criminals is required, throw in criminalArray
            render()        
        })
    }

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    
    /*
    Filter the criminals application state down to the people that committed the crime
        */
       
    if(event.detail.crimeSelect !== 0) {
                      
        const convictionsArray = useConvictions()
        
        const convictionThatWasChosen = convictionsArray.find(convictionObject => {
            return convictionObject.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminalsArray = criminalArray.filter(criminalObject => {
            return criminalObject.conviction === convictionThatWasChosen.name
        })

        let criminalHTML = ""
        for (const criminal of filteredCriminalsArray) {
            const facilityERDCriminal = facilityArray.filter(cf => cf.criminalId === criminal.id)
            
            const facility = facilityERDCriminal.map(cf => {
                const facilityObjectMatch = facilityArray.find(facility => facility.id === cf.facilityId)
                return facilityObjectMatch
            })
            criminalHTML += Criminal(criminal, facility)
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
    const selectedSuspect = criminalArray.filter(
            (criminalObject) => {
            if (criminalObject.arrestingOfficer === selectedOfficerName) {
                return true
            }
        })
            criminalArray = selectedSuspect
        render()
    }
)

/*
Then invoke render() and pass the filtered collection as
an argument
*/

const render = () => {
    // Step 1 - Iterate all criminals
    let criminalHTML = ""
    criminalHTML = criminalArray.map(
        (criminalObject) => {
            
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityERDCriminal = criminalFacilitiesArray.filter(cf => cf.criminalId === criminalObject.id)
            
            // Step 3 - Convert the relationships to facilities with map()
            const facility = facilityERDCriminal.map(cf => {
                const facilityObjectMatch = facilityArray.find(facility => facility.id === cf.facilityId)
                return facilityObjectMatch
            })
            
            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facility)
        }
    ).join("")
    
    criminalElement.innerHTML = criminalHTML
    
}        

// Alternative >> after let criminalHTML = ""
    // for (const item of array) {
    // Same logic for const, .map, .find
    // })
    // 
    // criminalHTML += Criminal(criminal, facilities)
    //
    //     criminalElement.innerHTML = `
    //     <div class="criminalsList">
    //     ${criminalHTML}
    //     </div>
    //     `
    //
