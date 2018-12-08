console.log('run b.js')

// import p from './print.js'
// var p = require('./print.js')
// console.log(p)

let test = 1

// import {getV, changeV3} from './print.js'
// let changeV3 = require('./print')

let printB = function(){
  console.log('print b')
}
export {printB as default}
// export let changeV2 = changeV3
// export function getVal(){
//   return getV()
// }
function showTest(){
  console.log(test)
}
export {test, showTest}

setTimeout(function(){test = 3},10000)

// exports.changeV2 = changeV3