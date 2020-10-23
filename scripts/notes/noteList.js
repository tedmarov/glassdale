import { NoteAsHTML } from "./noteHTMLConverter.js"
import { getNotes, useNotes } from "./notesDataProvider.js"

// get the notes from API >> use the notes array
// iterate the notes >> make html representation
// render to the dom

const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
        //console.log('allNotes: ', allNotes);
    })
}


const render = (notesArray) => {
    let notesHTML = ""
    for (const note of notesArray) {
        notesHTML += NoteAsHTML(note)
    }
    notesContainer.innerHTML = `
    <h3>GLASSDALE KNOWTES ON SUS</h3>
    <div class="notesList">
    ${notesHTML}
    </div>
    `
}
