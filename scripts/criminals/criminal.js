const eventHub = document.querySelector(".container")

export const Criminal = (criminalObject) => {
    console.log(criminalObject)
    return `
    <div id="criminal-${criminalObject.id}" class="criminal__card">
    <h2>Suspect</h2>
        <dd>Name: ${criminalObject.name}</dd>
        <dd>Age: ${criminalObject.age}</dd>
        <dd>Crime: ${criminalObject.conviction}</dd>
        <dd>Officer: ${criminalObject.arrestingOfficer}<dd>
        <dd>Start Term: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</dd>
        <dd>End Term: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</dd>
        <button id="associates--${criminalObject.id}">Associate Alibis</button>
    </div>  
    `
}


eventHub.addEventListener("click", (eventObject) => {   
    // split the id of the alibi button!
    const [nameOfId, criminalId] = eventObject.target.id.split("--")
    // check to see if the event button was clicked was alibi
if (eventObject.target.id.startsWith("associates--")){
    // console.log("button clicked was", nameOfId, criminalId)
    // build a custom event
    const myCustomEvent = new CustomEvent("alibiButtonClicked", {
    detail: {   
        criminalId: criminalId
    }
    })
    //Dispatch so that other modules can listen for event
    eventHub.dispatchEvent(myCustomEvent)
}
})