import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  roteador = inject(ActivatedRoute);
  pessoa!: Livros;


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

}
