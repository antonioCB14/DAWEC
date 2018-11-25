export class Nota{
    constructor(titulo, texto){
        this.titulo = titulo;
        this.texto = texto;
        this.hora = new Date().getHours()+":"+new Date().getMinutes(); 
    }
}