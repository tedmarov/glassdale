/*
Author: Ted
Responsibility: Get alibis related to a criminal and show it in a list
*/
import { useCriminals } from "./criminalProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiButtonClicked", (eventObject) => {
    //Show the alibi for the selected person
    // console.log("Hey! I'm listening!", eventObject.detail.criminalId)
    //Need to find the one criminal whose id matches criminalId sent in event
    const foundCriminal = useCriminals().find((criminalObject) => {
    return criminalObject.id === parseInt(eventObject.detail.criminalId)
})
    // console.log("Found the criminal", foundCriminal)
    //add alibi to the criminal card MVP

    AlibiList(foundCriminal)
})

//adds alibi to criminal
const AlibiList = (criminalObject) => {
    //HTML for alibi
    render(criminalObject)  
}

//Make a render method for adding alibi

const render = (criminalObject) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObject.id}`)
    
    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObject.known_associates.map(alibiObject => {
            return `
            <h2>Alibi</h2>
            <h3>${alibiObject.name}</h3>
            <dd>${alibiObject.alibi}</dd>
            `
        }).join("")}
    </div>
    `
}
