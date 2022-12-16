import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map,startWith, debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  glosario:string[]=[
    'samsung', 'xiaomi','apple','smatphones'
  ];
  control = new FormControl();
  filGlosario: Observable<string[]> | undefined;

  constructor(){}
  
  ngOnInit(): void {
    this.filGlosario = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
    map(val=> this._filter(val))
    )
    }
  
  private _filter(val:string): string[]{
    const formatVal=val.toLocaleLowerCase();
    return this.glosario.filter(glosa=>glosa.toLocaleLowerCase().indexOf(formatVal)===0);
  }

  

}
