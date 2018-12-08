
console.log('import print')
// var b = require('./b.js')
// console.log(b)

// let v = 1
// export default function(){
//   console.log('print change')
// }

// export  function foo(){
//   console.log('foo')
// }

// export function changeV(val){
//   v = val
// }

// export function getV(){
//   return v
// }

// export let aliasV  = v

let test = {
  x: 1
}
exports.changeV3 = test

setTimeout(function(){test = 3},10000)



// import b from './b.js'