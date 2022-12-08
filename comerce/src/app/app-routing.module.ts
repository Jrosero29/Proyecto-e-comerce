import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./paginas-comerce/home/home.component";
import {ContactoComponent} from "./paginas-comerce/contacto/contacto.component";
import {LoginComponent} from "./paginas-comerce/login/login.component";
import {ProductosComponent} from "./paginas-comerce/productos/productos.component";
const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'contacto',
  component:ContactoComponent 

},
{
  path:'login',
  component:LoginComponent
},
{
  path:'productos',
  component:ProductosComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
