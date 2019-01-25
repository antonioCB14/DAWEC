<template>
  <div class="lista">
    <div class="w-50 mx-auto">
      <b-form-input v-model="nuevatarea" type="text" placeholder="¿Qué quieres recordar?" @keyup.native.enter="annadirTarea()"></b-form-input>
    </div>
    <hr>
      <p><font-awesome-icon icon="chart-bar"/> {{porCompletar}} tareas pendientes de un total de {{ordenTareas.length}} | 
      <font-awesome-icon icon="times" style="color: orange;"/><a style="color:orange; cursor: pointer;" @click="borrarTodas()"> Borrar tareas completada</a>
      </p>
    <hr>
    <div class="w-50 mx-auto" style="border: 2px solid #878080; background-color:#303030; border-radius: 5px;">
      <div class="animated fadeIn" v-for="(item, index) in filteredItems" :key="index" style="border-top: 1px solid #878080;">
        <b-container class="p-1">
          <b-row align-v="center">
            <b-col cols="1">
              <b-button variant="basic" v-if="item.Completada" @click="completar(index, false)"><font-awesome-icon :icon="['far', 'check-circle']" size="lg" style="color:#00897b;"/></b-button>
              <b-button variant="basic" v-else @click="completar(index, true)"><font-awesome-icon :icon="['far', 'circle']" size="lg" style="color:white;"/></b-button>
            </b-col>
            <b-col cols="9" style="text-align:left;">
              <h2 v-if="item.Completada" style="color:#00897b;"><Strike>{{item.Tarea}}</Strike></h2>
              <h2 v-else>{{item.Tarea}}</h2>
            </b-col>
            <b-col cols="1">
              <b-button variant="danger" @click="borrar(index)"><font-awesome-icon icon="minus-circle"/></b-button>
            </b-col>
          </b-row>
          <b-row align-v="center">
            <b-col cols="2">
              <h6>Prioridad:</h6>
            </b-col>
            <div v-if="item.Prioridad == '3Baja'">
              <b-col>
                  <b-button-group size="sm">
                    <b-button variant="info"><font-awesome-icon icon="angle-down"/> Low</b-button>
                    <b-button variant="secondary" @click="cambiarPrioridad(index,'2Media')">Normal</b-button>
                    <b-button variant="secondary" @click="cambiarPrioridad(index,'1Alta')">High <font-awesome-icon icon="angle-up"/></b-button>
                  </b-button-group>
              </b-col>
            </div>
            <div v-if="item.Prioridad == '2Media'">
              <b-col>
                <b-button-group size="sm">
                  <b-button variant="secondary" @click="cambiarPrioridad(index,'3Baja')"><font-awesome-icon icon="angle-down"/> Low</b-button>
                  <b-button variant="primary">Normal</b-button>
                  <b-button variant="secondary" @click="cambiarPrioridad(index,'1Alta')">High <font-awesome-icon icon="angle-up"/></b-button>
                </b-button-group>
              </b-col>
            </div>
            <div v-if="item.Prioridad == '1Alta'">
              <b-col>
                <b-button-group size="sm">
                  <b-button variant="secondary" @click="cambiarPrioridad(index,'3Baja')"><font-awesome-icon icon="angle-down"/> Low</b-button>
                  <b-button variant="secondary" @click="cambiarPrioridad(index,'2Media')">Normal</b-button>
                  <b-button variant="danger">High <font-awesome-icon icon="angle-up"/></b-button>
                </b-button-group>
              </b-col>
            </div>
            <b-col>
              <font-awesome-icon :icon="['far', 'clock']"/> Añadido hace {{ item.Fecha_Creacion | moment("from","now",true) }}
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  data: function() {
    return {
      nuevatarea: '',
      tareas: [],
    };
  },
  methods: {
    annadirTarea: function(){
      if (this.nuevatarea != ""){
        this.tareas.push({
                Tarea:this.nuevatarea,
                Prioridad:"3Baja",
                Fecha_Creacion:new Date,
                Completada:false
        })
        this.nuevatarea=""
        localStorage.setItem('storedData', JSON.stringify(this.tareas))
      }
      
    },
    completar: function(index, valor){
      this.filteredItems[index].Completada = valor;
      localStorage.setItem('storedData', JSON.stringify(this.tareas))
    },
    borrar: function(index){
      var indice = this.tareas.indexOf(this.filteredItems[index]);
      this.$delete(this.tareas, indice);
      if (this.filteredItems.length == 0){
        this.nuevatarea = "";
      }
      localStorage.setItem('storedData', JSON.stringify(this.tareas))
    },
    cambiarPrioridad: function(index, prioridad){
      this.filteredItems[index].Prioridad = prioridad;
      localStorage.setItem('storedData', JSON.stringify(this.tareas));
    },
    borrarTodas : function(){
      this.tareas = this.filteredItems.filter(function (index) {
        return index.Completada == false;
      });
      localStorage.setItem('storedData', JSON.stringify(this.tareas));
    },
  },
  computed: {
    porCompletar: function(){
      var pendiente = 0;
      for(var i=0; i<this.tareas.length;i++){
        if(this.tareas[i].Completada == false){
          pendiente++;
        }
      }
      return pendiente;
    },
    ordenTareas: function () {
      return _.orderBy(this.tareas, 'Prioridad');
    },
    filteredItems: function() {
      return this.ordenTareas.filter(tarea => {
         return tarea.Tarea.toLowerCase().indexOf(this.nuevatarea.toLowerCase()) > -1;
      })
    }
  },
  created: function (){
    if(localStorage.getItem('storedData') != null){
      this.tareas = JSON.parse(localStorage.getItem('storedData'));
    }
  },
}
</script>
