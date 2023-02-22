import binarySearch from './binarySearch.js'
import { generateIncreasignArray } from './utils.js'

const result = binarySearch(generateIncreasignArray(128), 47)

console.log(result)