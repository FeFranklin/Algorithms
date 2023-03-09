const sumDivideAndConquer = (array) => {
    const element = array.shift()
    if (array.length === 0) {
        return element
    }
    return element + sumDivideAndConquer(array)
}

export default sumDivideAndConquer