// Vue.component('my-list', {
//   template: '#my-list',
//   props: ['title'],
//   data() {
//     return {
//       title: 'Shapes',
//       shapes: [
//         {
//           name: 'Square',
//           sides: 4
//         },
//         {
//           name: 'Hexagon',
//           sides: 6
//         },
//         {
//           name: 'Triangle',
//           sides: 3
//         }
//       ],
//       colors: [
//         {
//           name: 'Yellow',
//           hex: '#f4d03f'
//         },
//         {
//           name: 'Green',
//           hex: '#229954'
//         },
//         {
//           name: 'Purple',
//           hex: '#9b59b6'
//         }
//       ],
//     }
//   },
//   components: {
//     // 需要 webpack 解释 require
//     // component1: require("../9.22vue练习/单文件组件.vue").default

//     "my-list": {
//       // data: function () {
//       //   return {
//       //     greeting: 'greeting'
//       //   }
//       // },
//       template: '#my-list',
//       props: ['title'],
//     }
//   },
// })
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'Shapes',
      shapes: [
        {
          name: 'Square',
          sides: 4
        },
        {
          name: 'Hexagon',
          sides: 6
        },
        {
          name: 'Triangle',
          sides: 3
        }
      ],
      colors: [
        {
          name: 'Yellow',
          hex: '#f4d03f'
        },
        {
          name: 'Green',
          hex: '#229954'
        },
        {
          name: 'Purple',
          hex: '#9b59b6'
        }
      ],
    }
  },
  components: {
    // 需要 webpack 解释 require
    // component1: require("../9.22vue练习/单文件组件.vue").default

    "my-list": {
      // data: function () {
      //   return {
      //     greeting: 'greeting'
      //   }
      // },
      template: '#my-list',
      props: ['title'],
    }
  },
})
