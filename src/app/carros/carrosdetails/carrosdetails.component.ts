import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../carros';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  pessoa!: Carros;


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
}
