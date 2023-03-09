const quickSort = (array) => {
    if (array.length < 2) {
        return array
    } else {
        const pivot = array[Math.floor(array.length / 2)]
        const smaller = array.filter(elem => elem !== pivot && elem <= pivot)
        const bigger = array.filter(elem => elem !== pivot && elem > pivot)
    
        return [...quickSort(smaller), pivot, ...quickSort(bigger)]
    }

}

export default quickSort