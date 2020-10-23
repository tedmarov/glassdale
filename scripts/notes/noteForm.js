import { saveNote } from "./notesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML = `
    <input id="note--dateOfInterview" type="date"/>
    <input id="note--author" type="text" placeholder="Your Name Here"/>
    <input id="note--suspect" type="text" placeholder="Suspect Name"/>
    <textarea id="note--note" placeholder="Your Note Here"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        //grab
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const timestamp = Date.now()
        const note = document.querySelector("#note--note").value

        //note Object
        const newNote = {
            author,
            suspect,
            dateOfInterview,
            timestamp,
            note
        }
        //Send to JSON
        saveNote(newNote)
    }

})

export const NoteForm = () => {
    render()
}