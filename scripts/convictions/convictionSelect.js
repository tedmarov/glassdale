/*
*   ConvictionSelect component that renders a select HTML element
*   which lists all convictions in the Glassdale PD API
*/
import { getConvictions, useConvictions } from "./convictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                    convictionObject => {
                    return `<option value="${convictionObject.id}">${convictionObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

// Previous version
// export const convictionSelect = () => {
//     // Get all convictions from application state
//     getConvictions().then( () => {
//         const appStateConvictions = useConvictions()
//         render(appStateConvictions)
// })
// }

export const convictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

// Get a reference to the DOM element where the <select> will be rendered

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (changeEvent) => { 

// Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {

        // Create custom event. Provide an appropriate name.

        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: parseInt(changeEvent.target.value)
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


    // contentTarget.addEventListener("change", (event) => {

    // if (event.target.id === "crimeSelect")
    //     const customEvent = new CustomEvent("convictionChosen", {
    //         detail: {
    //             crimeThatWasChosen: event.target.value
    //     }
    // })
    // eventHub.dispatchEvent(event)
    // })

