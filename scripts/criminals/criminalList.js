import { getCriminals, useCriminals } from "./criminalProvider.js"
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"
import { getFacilities, useFacilities } from "../facilities/facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/criminalFacilityProvider.js"

const eventHub = document.querySelector(".container")

const criminalElement = document.querySelector(".caseDataContainer")

export const criminalList = () => {
    // getCriminals()
    // .then(
        getFacilities()
    .then(getCriminalFacilities)
    .then(
        () => {
            const facilityArray = useFacilities()
            const criminalFacilitiesArray = useCriminalFacilities()
            const criminalArray = useCriminals()
            //If rendering all criminals is required, throw in criminalArray
            render(criminalArray, facilityArray, criminalFacilitiesArray)        
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

        const facilityArray = useFacilities()   

        const criminalFacilitiesArray = useCriminalFacilities()

        
        const convictionThatWasChosen = convictionsArray.find(convictionObject => {
            return convictionObject.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObject => {
            return criminalObject.conviction === convictionThatWasChosen.name
        })

        let criminalHTML = ""
        for (const criminal of filteredCriminalsArray) {
            const facilityERDCriminal = criminalFacilitiesArray.filter(cf => cf.criminalId === criminal.id)
            
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
    
        const criminalsArray = useCriminals()

        const facilitiesArray = useFacilities()
        
        const allRelationships = useCriminalFacilities()

        const filteredCriminalsArray = criminalsArray.filter(
            (criminalObject) => {
            return criminalObject.arrestingOfficer === selectedOfficerName  
        })

        render(filteredCriminalsArray, facilitiesArray, allRelationships)
    }
)

/*
Then invoke render() and pass the filtered collection as
an argument
*/

const render = (criminalArray, facilityArray, allRelationships) => {
    // Step 1 - Iterate all criminals
    let criminalHTML = ""
    criminalHTML = criminalArray.map(
        (criminalObject) => {
            
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityERDCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
            
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

    // let criminalHTML = ""
    // for (const criminal of criminalArray) {
    //     criminalHTML += Criminal(criminal)
    //     criminalElement.innerHTML = `
    //     <div class="criminalsList">
    //     ${criminalHTML}
    //     </div>
    //     `
    // }
}        

