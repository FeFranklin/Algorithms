const binarySearch = (orderedArray, item) => {
    let lowLimit = 0
    let highLimit = orderedArray?.length - 1
    let tries = 0
    while ( lowLimit <= highLimit) {
        // rounds down and returns the largest integer less than or equal to a given number.
        let half = Math.floor((lowLimit + highLimit) / 2)
        let guess = orderedArray[half]
        tries++

        if (guess === item) {
            return { index: half, tries}
        }
        
        
        if (guess > item) {
            highLimit = half - 1
        }
        
        if (guess < item) {
            lowLimit = half + 1
        }
    }

    return 'not found'
    
}

export default binarySearch
