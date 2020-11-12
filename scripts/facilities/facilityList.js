import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
import { getFacilities, useFacilities } from "./facilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./criminalFacilityProvider.js"
import { Facility } from "./facility.js"
import "./displayFacilitiesButton.js"

const eventHub = document.querySelector(".container")

const facilityElement = document.querySelector(".caseDataContainer")

let criminalArray = []
let facilityArray = []
let criminalFacilitiesArray = []

export const facilityList = () => {
    getFacilities()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(
        () => {
        criminalArray = useCriminals()
        facilityArray = useFacilities()
        criminalFacilitiesArray = useCriminalFacilities()
        render()
    })
}

eventHub.addEventListener("facilityButtonClicked", () => {
console.log("Hey man")
        facilityList()
    })
    
    
const render = () => {
    let facilityHTML = ""
    facilityHTML = facilityArray.map(
        (facilityObject) => {
            const criminalERDFacility = criminalFacilitiesArray.filter(cf => cf.criminalId === facilityObject.id)
  
            const criminal = criminalERDFacility.map(cf => {
                const criminalObjectMatch = criminalArray.find(c => c.id === cf.facilityId)
                return criminalObjectMatch
            })
            return Facility(facilityObject, criminal)
        }
    ).join("")

    facilityElement.innerHTML = facilityHTML
}

