<template>
  <div class="tiempo">
	<p>{{error}}</p>
    <div v-if="datos != ''">
        <b-container fluid>
            <b-row>
                <b-col cols="12">
                    <h1>Tiempo en {{datos.name}}</h1>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col cols="2">
                    <h2><img :src='icono'>{{datos.main.temp}}ºC</h2>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col cols="4">
                    <h4 class="text-capitalize">{{traduccion.text[0]}}</h4>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col cols="4">
                    <h5>Última actualización: {{formattedTime}}</h5>
                </b-col>
            </b-row>
            <hr>
            <b-row class="justify-content-center">
                <b-col cols="2">
                    <h6><font-awesome-icon icon="temperature-low" style="color: #1976d2;"/> Mínimas: {{datos.main.temp_min}}ºC</h6>
                </b-col>
                <b-col cols="2">
                    <h6><font-awesome-icon icon="temperature-high" style="color: #d32f2f;"/> Máximas: {{datos.main.temp_max}}ºC</h6>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col cols="2">
                    <h6><font-awesome-icon icon="angle-double-up" style="color: orange;"/><font-awesome-icon icon="sun" style="color: orange;"/> Amanecer: {{amanecer}}</h6>
                </b-col>
                <b-col cols="2">
                    <h6><font-awesome-icon icon="angle-double-down" style="color: orange;"/><font-awesome-icon icon="sun" style="color: orange;"/> Anochecer: {{anochecer}}</h6>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col cols="2">
                    <h6><font-awesome-icon icon="tint" style="color: #64b5f6;"/> Humedad: {{datos.main.humidity}}%</h6>
                </b-col>
                <b-col cols="2">
                    <h6><font-awesome-icon icon="cloud" style="color: #64b5f6;"/> Nubes: {{datos.clouds.all}}%</h6>
                </b-col>
            </b-row>
        </b-container>
    </div>
  </div>
</template>

<script>
export default {
    name: 'tiempo',
    data: function() {
        return {
            datos: [],
            APIkey: "6f68ad88442219c0215f31ec387ce0f7",
            APItraductor: "trnsl.1.1.20190124T114016Z.12bd53372ddfa72f.ec029510449d346627412ff2c1ce778652475f25",
            error: '',
            lat:'',
            lon:'',
            icono: "",
            formattedTime: "",
            traduccion: [],
            amanecer: "",
            anochecer: "",
        };
    },
    methods:{
        myFunction: function () {		
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.showPosition);               
            }else{
                this.error = "Geolocation is not supported."; 
            }
        },
        showPosition: function (position) {	
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            this.recibirDatos();
        },
        recibirDatos() {
            this.axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+this.lat+'&lon='+this.lon+'&units=metric&appid='+this.APIkey).then(response => {
                this.datos = response.data;
                this.icono = "http://openweathermap.org/img/w/"+this.datos.weather[0].icon+".png";
                this.formattedTime = this.transformarDate(this.datos.dt);
                this.amanecer = this.transformarDate(this.datos.sys.sunrise);
                this.anochecer = this.transformarDate(this.datos.sys.sunset);
                this.traducir();
            })
        },
        transformarDate(dato){
            var date = new Date(dato*1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            return hours + ':' + minutes.substr(-2); 
        },
        traducir(){
            this.axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+this.APItraductor+'&text='+this.datos.weather[0].description+'&lang=es').then(response => {
                this.traduccion = response.data;
            })
        }
    },
    beforeMount(){
        this.myFunction();
    },
    mounted(){
      setTimeout(this.myFunction,600000);  
    },
}
</script>