/*
  1. Datos de notas (TODOS)
  Todo{
    TAREA
    PRIORIDAD
    FECHA_CREACION
    COMPLETADA
  } (2 Elementos)
  2. Mostrar en pantalla cada TODO
  3. Añadir un INPUT -> En la caja de texto escribo una tarea y pulso un botón para darla de alta
  4. Mostrar numero de tareas
  5. Mostrar numero de tareas completadas
  6. Alamacena las notas en local storage
  7. Al cargarse tu web lee las notas de local storage --> created: function()
*/
Vue.component("componente", {
  template: "#template-prueba",
  props:["nombre"]
})

var app = new Vue({
  el: '#app',
  data: {
    nuevatarea: "",
    tareas: [],
  },
  methods: {
    annadirTarea: function (){
      this.tareas.push({
        Tarea:this.nuevatarea,
        Prioridad:"Baja",
        Fecha_Creacion:new Date,
        Completada:false
        })
        localStorage.setItem('storedData', JSON.stringify(this.tareas))
    }
  },
  computed: {
    porCompletar: function(){
      var pendiente = 0;
      for(i=0; i<this.tareas.length;i++){
        if(this.tareas[i].Completada == false){
          pendiente++;
        }
      }
      return pendiente;
    }
  },
  created: function (){
    if(localStorage.getItem('storedData') != null){
      this.tareas = JSON.parse(localStorage.getItem('storedData'));
    }
  },
})