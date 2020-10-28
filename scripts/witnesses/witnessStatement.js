export const witnessStatement = (witnessObject) => {
    return `
        <div class="witness">
            <h2>Name: ${witnessObject.name}</h2>
            <dd>Statements: ${witnessObject.statements}</dd>
        </div>
    `
}