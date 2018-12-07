
console.log('import print')
// var b = require('./b.js')
console.log(b)

export default function(){
  console.log('print change')
}

export  function foo(){
  console.log('foo')
}

import b from './b.js'