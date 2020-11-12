import { getWitnessStatements, useWitnessStatements } from "./witnessDataProvider.js"
import { witnessStatement } from "./witnessStatement.js"


const eventHub = document.querySelector(".container")

const witnessesList = () => {
    getWitnessStatements().then(() => {
        const witnessesArray = useWitnessStatements()
        render(witnessesArray)
    })
}

eventHub.addEventListener("witnessButtonClicked", () => {

        witnessesList()
    })
    
    
const render = (witnessStatementsArray) => {
    let witnessStatementsHTML = ""
    for (const witness of witnessStatementsArray) {
        witnessStatementsHTML += witnessStatement(witness)
    }
    const witnessElement = document.querySelector(".caseDataContainer")
    
    witnessElement.innerHTML = `
    <article class="witnessList">
        ${witnessStatementsHTML}
    </article>
    `
}

