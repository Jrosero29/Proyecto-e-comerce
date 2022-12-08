import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

  articulo={
    codigo:0,
    nombre:'',
    precio:0

  };
  articulos = [
    {codigo:1, nombre:'samsung', precio:350 },{codigo:2, nombre:'xiaomi', precio:450},{codigo:3, nombre:'apple', precio:950}
  ];

registrosCreados(){

  return this.articulos.length > 0;
}

borrar(codigo:number){
  for(let i=0; this.articulos.length > i; i++ )
  if(this.articulos[i].codigo==codigo){
    this.articulos.splice(i, 1);

    return ;
    
  }
}
agregarElemento(){
if(this.articulo.codigo==0){
  alert('Campo de codigo vacio');
  return;
}   

for(let i=0; this.articulos.length > i; i++ )
if(this.articulos[i].codigo==this.articulo.codigo ){
  
  alert('El codigo del elemento ya existe');
  
  return;
  }
    this.articulos.push({codigo:this.articulo.codigo ,nombre:this.articulo.nombre,precio:this.articulo.precio});

 
 this.articulo.codigo=0;
 this.articulo.nombre='';
 this.articulo.precio=0; 
}
seleccionar(articulo:{codigo:number, nombre:string, precio:number}){
this.articulo.codigo=articulo.codigo;
this.articulo.nombre=articulo.nombre;
this.articulo.precio=articulo.precio;
}
actualizar(){
  for(let i=0; this.articulos.length > i; i++ ){
    if(this.articulos[i].codigo==this.articulo.codigo ){
  
      this.articulos[i].nombre=this.articulo.nombre;
      this.articulos[i].precio=this.articulo.precio;
      
      return;
  }

}
alert('este codigo no existe para actualizar');


    this.agregarElemento();
    for(let i=0; this.articulos.length > i; i++ ){
      if(this.articulos[i].codigo!=this.articulo.codigo ){
        
      var anwser= prompt('Desea agregar este artículo Si/No')
      if (anwser=='Si'){
        this.agregarElemento();
        return;
   }else{
    if(anwser=='No')
    alert('El proceso ha incluido');
return;
   }

      }
      
    }
  }
}
