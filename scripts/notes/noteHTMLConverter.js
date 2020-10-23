export const NoteAsHTML = (noteObject) => {
    // convert to HTML
    // return that HTML string
    return `
    <div class="note">
    <h2>Author: ${noteObject.author}</h2>
        <dd>Suspect: ${noteObject.suspect}</dd>
        <dd>Date of Interview: ${noteObject.dateOfInterview}</dd>
        <dd>Time Note Entered: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}<dd>
        <dd>Note: ${noteObject.note}</dd>
    </div>
    `
}