/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./convictionProvider.js"

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                    convictionObject => ` 
                    <option value="${convictionObject.id}">${convictionObject.name}</option>
                    `)
            }
        </select>
    `
}

export const convictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then( () => {
        const appStateConvictions = useConvictions()
        render(appStateConvictions)
})
}

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("change", changeEvent => { 
//     if (changeEvent.target.id.startsWith("crimeSelect")) {
     
//         const convictionName = changeEvent.target.convictionObjecct.id

//         const convictionChosenEvent = new CustomEvent("convictionChosen", {

//             detail: {
//                 conviction: convictionName
//             }
//         })
//         eventHub.dispatchEvent(convictionChosenEvent)
//     }
// })

