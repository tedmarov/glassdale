/* All data providers need an empty array
and a copy of the array. After that, just
figure out what kind of raw data it is. */

let witnessDB = []

export const useWitnessStatements = () => witnessDB.slice()

export const getWitnessStatements = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnessStatements => {
            console.table(parsedWitnessStatements)
            witnessDB = parsedWitnessStatements
        }
    )
}