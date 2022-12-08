import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas-comerce/home/home.component';
import { ProductosComponent } from './paginas-comerce/productos/productos.component';
import { ContactoComponent } from './paginas-comerce/contacto/contacto.component';
import { LoginComponent } from './paginas-comerce/login/login.component';
import { ComponentescomerceModule } from './componentescomerce/componentescomerce.module';
import { PaginasComerceModule } from './paginas-comerce/paginas-comerce.module';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProductosComponent,ContactoComponent,LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentescomerceModule,
    PaginasComerceModule,
    FormsModule
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
