import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../carros';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  carros: Carros = new Carros(0,"",0);

  @Output() retorno = new EventEmitter<Carros>();
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    //banco de dados... back
    this.retorno.emit(this.carros);

  }
}
