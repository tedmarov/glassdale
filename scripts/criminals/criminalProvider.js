let criminalDB = []

export const useCriminals = () => {
   return criminalDB.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminalDB = parsedCriminals
            }
            
        )
    
    
}

// export const getConvictionsByCriminal = conviction => {
//     const convictionCriminals = useCriminals()

//     return convictionCriminals.filter(c => c.conviction === conviction)
// }