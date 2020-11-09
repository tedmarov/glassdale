import { getCriminals, useCriminals } from "../criminals/criminalProvider.js"
import { saveNote } from "./notesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = criminal => {
    contentTarget.innerHTML = `
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <select id="note--criminal" class="dropdown">
            <option value="0">Please select a criminal...</option>    
            ${criminal.map(
                    criminalObject => {
                    return `<option value="${criminalObject.id}">${criminalObject.name}</option>`
                    }
                ).join("")
            }        
        </select>
        <input id="note--dateOfInterview" type="date"/>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
        `
}


export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
    render(criminalsArray)
       })
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        //grab
        const author = document.querySelector("#note--author").value
        const criminal = document.querySelector("#note--criminal").value
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const timestamp = Date.now()
        const note = document.querySelector("#note--note").value

        //note Object
        const newNote = {
            author,
            criminal,
            dateOfInterview,
            timestamp,
            note
        }
        //Send to JSON
        saveNote(newNote)
    }

})

