import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas-comerce/home/home.component';
import { ProductosComponent } from './paginas-comerce/productos/productos.component';
import { ContactoComponent } from './paginas-comerce/contacto/contacto.component';
import { LoginComponent } from './paginas-comerce/login/login.component';
import { ComponentescomerceModule } from './componentescomerce/componentescomerce.module';
import { PaginasComerceModule } from './paginas-comerce/paginas-comerce.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatAutocompleteModule} from "@angular/material/autocomplete";






@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProductosComponent,ContactoComponent,LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    ComponentescomerceModule,
    PaginasComerceModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
