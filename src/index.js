// import Vue from 'vue'
// import './style/base.css'
// import printMe from './print'
let i = document.createElement('input')
let sc = document.createElement('img')
i.addEventListener('change', function(e){
  sc.src =  require('./style/' + 'ercode'+e.target.value+'.jpg')
})
document.body.appendChild(i)
document.body.appendChild(sc)



// setTimeout(()=>{
//   let sc = document.createElement('img')
//   sc.src = require('./style/' + 'ercode'+'.jpg')
//   document.body.appendChild(sc)
// },1000)

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());