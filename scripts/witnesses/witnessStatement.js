export const witnessStatement = (witnessObject) => {
    return `
        <div class="witness__card">
            <h2>Witness</h2>
            <dd><b>Name:</b> ${witnessObject.name}</dd>
            <dd>${witnessObject.statements}</dd>
        </div>
    `
}