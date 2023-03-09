import binarySearch from './algos/binarySearch.js'
import sumDivideAndConquer from './algos/sumDivideAndConquer.js'
import quickSort from './algos/quickSort.js'
import { generateIncreasignArray } from './utils.js'

// const result = binarySearch(generateIncreasignArray(130), 131)
// const result = sumDivideAndConquer([1, 2, 3])
const result = quickSort([2, 1, 15, 44, 5, 3, 6])

console.log(result)