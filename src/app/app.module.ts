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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartphonesComponent } from './paginas-comerce/smartphones/smartphones.component';
import { ComputacionComponent } from './paginas-comerce/computacion/computacion.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProductosComponent,ContactoComponent,LoginComponent, SmartphonesComponent, ComputacionComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentescomerceModule,
    PaginasComerceModule,
    FormsModule,
    BrowserAnimationsModule
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
