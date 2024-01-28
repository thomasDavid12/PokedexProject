import { Component } from '@angular/core';
import { PokemonLineDto } from '../../models/PokemonLineDto';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatListModule, MatInputModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  pokemons: PokemonLineDto[] = [];
  filteredPokemons: PokemonLineDto[] = [];
  filter: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.http.get<any[]>('https://tyradex.vercel.app/api/v1/pokemon')
    .subscribe(response => {
      this.filteredPokemons = this.pokemons = response.map((data: any) => ({
        name: data.name.fr,
        pokedexNumber: data.pokedexId,
        spritePath: data.sprites.regular
      }));
    });
  }

  updateList($event:any) {
    this.filter = $event.target.value
    
    if(this.filter.length >= 3) {
      this.filteredPokemons = this.pokemons.filter(p => {
        const pokemonMinuscule = p.name.toLowerCase();
        const filterMinuscule = this.filter.toLowerCase();
        return pokemonMinuscule.includes(filterMinuscule);
      });
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }
}
