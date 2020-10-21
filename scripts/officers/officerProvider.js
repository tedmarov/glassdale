let officerDB = []

export const useOfficers = () => {
    return officerDB.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => { 
                console.table(parsedOfficers)
                officerDB = parsedOfficers
            }
        )
}   