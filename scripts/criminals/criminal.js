
export const Criminal = (criminalObject) => {
    return `
    <div class="criminal">
    <div class="criminal--id" id="criminal--${criminalObject.id}">
    <h2 class=criminal__name">Name: ${criminalObject.name}</h2>
        <dd>Age: ${criminalObject.age}</dd>
        <dd>Crime: ${criminalObject.conviction}</dd>
        <dd>Officer: ${criminalObject.arrestingOfficer}<dd>
        <dd>Start Term: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</dd>
        <dd>End Term: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</dd>
    </div>
    </div>
    `
}