import { Component, OnInit } from '@angular/core';

import { PokedexService } from './services/pokedex.service';
import { Pokemon } from './classes/pokemon';

@Component({
  moduleId: module.id,
  selector: 'pokedex-app',
  templateUrl: 'pokedex.component.html',
})
export class PokedexAppComponent implements OnInit {

  constructor(private pokedexService: PokedexService){}

  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  ngOnInit() {
  	this.loadMore();
  }

  loadMore() {
  	this.isLoading = true;

  	this.pokedexService.getPokemon(this.pokemon.length, 9)
  						.then(pokemon=> {
  							pokemon = pokemon.map(p=> {
  								p.imageLoaded = false;
  								return p;
  							});
  							this.pokemon = this.pokemon.concat(pokemon);
  							this.isLoading = false;
  							this.error = false;
  						})
  						.catch(()=>{
  							this.error = true;
  							this.isLoading = false;
  						});
  }

}
