import Vue from 'vue'
// import './style/base.css'
// import printMe from './print'
// let i = document.createElement('input')
// let sc = document.createElement('img')
// i.addEventListener('change', function(e){
//   sc.src =  require('./style/' + 'ercode'+e.target.value+'.jpg')
// })
// document.boxdy.appendChild(i)
// document.body.appendChild(sc)
let testComponent = {
  name: 'test',
  template: '<div>{{test2}} + {{new Date().getTime()}} {{b.b}} <div v-for="v in arrs">{{v}}</div><input ref="input" @change="input" :value="oa.x"></div>',
  data(){
    console.log('component-data', new Date().getTime())
    return {
      test2: 'test2',
      b: {},
      oa: this.a
    }
  },
  props:['a'],
  computed:{
    arrs(){
      return [1,1,1,1].fill(this.test2, 0)
    },
  },
  
  methods:{
    input(e){
      console.log(e.target.value)
    }
  },
  beforeCreate(){
    console.log('component-beforeCreate', new Date().getTime())
  },
  created(){
    console.log('component-created', new Date().getTime())
    console.log(this.a)
    this.oa.x = 2
  },
  beforeMount(){
    console.log('component-beforeMount', new Date().getTime())
  },
  mounted(){
    console.log('component-mounted', new Date().getTime())
    // this.b = {b: 'bbbb'}
    this.$set(this.b, 'b', 'bbbb')
    console.log(typeof this.a)
  },

}

new Vue({
  el: '#app',
  components: {testComponent},
  template: '<div><testComponent :a="testa"/><div>{{testa.x}} + {{new Date().getTime()}}</div><div v-for="v in arr">{{v}}</div><button @click="arr.push(1)"></button></div>',
  data(){
    console.log('data', new Date().getTime())
    return {
      test: 1,
      arr: [1,2,4,4],
      testa: {x: 1 },
    }
  },
  beforeCreate(){
    console.log('beforeCreate', new Date().getTime());
  },
  created(){
    console.log('created', new Date().getTime());
  },
  beforeMount(){
    console.log('beforeMount', new Date().getTime())
  },
  mounted(){
    console.log('mounted', new Date().getTime())
    // this.testa.x = 4
  },
});


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