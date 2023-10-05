import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livros[] = [];
  
  
  constructor(){

    this.lista.push(new Livros("monica","mauricio" ));
    this.lista.push(new Livros("One piece", "ODA"));
    this.lista.push(new Livros("manifesto comuna", "karl marx"));

}
}