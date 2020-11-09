export const NoteAsHTML = (noteObject) => {
    // convert to HTML
    // return that HTML string
    return `
        <dd>Author: ${noteObject.author}</dd>
        <dd>Date of Interview: ${noteObject.dateOfInterview}</dd>
        <dd>Time Note Entered: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}<dd>
        <dd>Note: ${noteObject.note}</dd>
        <button id="deleteNote--${noteObject.id}">Delete Note</button>
    `
}