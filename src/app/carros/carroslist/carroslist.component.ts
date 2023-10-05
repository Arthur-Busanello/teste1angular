import { Component } from '@angular/core';
import { Carros } from '../carros';
@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

    lista: Carros[] = [];
  
  
    constructor(){
  
      this.lista.push(new Carros("honda", 2000));
      this.lista.push(new Carros("mk3", 1993));
      this.lista.push(new Carros("r32", 1998));
  
  }
  
  
}
