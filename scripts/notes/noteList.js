import { NoteAsHTML } from "./noteHTMLConverter.js"
import { getNotes, useNotes } from "./notesDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"

// get the notes from API >> use the notes array
// iterate the notes >> make html representation
// render to the dom

const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const allNotes = useNotes()
        const allCriminals = useCriminals()
        render(allNotes, allCriminals)
        //console.log('allNotes: ', allNotes);
    })  
}


const render = (notesArray, criminalArray) => {    
    
    let notesHTML = ""
    for (const note of notesArray) {
        const criminal = criminalArray.find(criminal => criminal.id === note.criminalId)
    notesHTML += `
    <div class="note">
        <h2>Note about ${criminal.name}</h2>
        ${NoteAsHTML(note)}
    </div>
    `
    } 
    notesContainer.innerHTML = notesHTML
}