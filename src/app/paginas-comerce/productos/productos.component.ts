import { Component, OnInit } from '@angular/core';

import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  articulos:any;

  constructor(private articulosService: ArticulosService){ }

  ngOnInit(){
    this.articulosService.retornar()
    .subscribe(result=>this.articulos=result) 
  }
  }

