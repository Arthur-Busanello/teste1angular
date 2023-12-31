import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  livros: Livros = new Livros(1,"","");

  @Output() retorno = new EventEmitter<Livros>();
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    //banco de dados... back
    this.retorno.emit(this.livros);

  }
}
