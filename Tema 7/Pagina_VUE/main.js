Vue.component("mitag",{
  template: '<h1>Este es el texto</h1>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    enlaces: [{TextoEnlace:"asd",
              url:"https://google.com"},{
              TextoEnlace:"asddfg",
              url:"https://google.com"
              }
            ]
  }
})