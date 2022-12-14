import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map,startWith, debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = "../assets/img1.jpg";
  imageChange(event: any){
    this.url = event.target.src;
  }
  glosario:string[]=[
    'samsung', 'xiaomi','apple'
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
