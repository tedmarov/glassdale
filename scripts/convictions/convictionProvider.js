/* All data providers need an empty array
and a copy of the array. After that, just
figure out what kind of raw data it is. */

let convictionDB = []

export const useConvictions = () => {
    return convictionDB.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictionDB = parsedConvictions
            }
        )

}
