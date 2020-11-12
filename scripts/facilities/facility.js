export const Facility = (facilityObject, criminalObject) => {
    return `
    <div id="facility-${facilityObject.id}" class="facility__card">
    <h2>Facility</h2>
        <dd>Name: ${facilityObject.facilityName}</dd>
        <dd>Security: ${facilityObject.securityLevel}</dd>
        <dd>Capacity: ${facilityObject.capacity}</dd>
    <h2>Suspects</h2>
        <dd>${criminalObject.map(cO => `<dd>${cO.name}</dd>`).join("")}</dd>
    </div>
    `
}