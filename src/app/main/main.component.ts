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

  // Fonction : updateList
  // Paramètres :
  //   - $event : tout type (any) - représente l'événement déclencheur de la mise à jour (probablement un événement d'entrée, comme une saisie utilisateur)
  // Description :
  //   Cette fonction est utilisée pour mettre à jour la liste des Pokémon filtrés en fonction de la valeur entrée par l'utilisateur.
  //   Elle prend en compte la valeur de la propriété 'filter' qui est mise à jour avec la valeur de l'événement $event.
  //   Si la longueur de la chaîne de filtre atteint ou dépasse 3 caractères, la liste des Pokémon filtrés est mise à jour en fonction du filtre.
  //   Sinon, la liste des Pokémon filtrés est réinitialisée pour afficher tous les Pokémon disponibles.
  // Remarques :
  //   - La comparaison des noms de Pokémon se fait en insensible à la casse pour assurer une correspondance appropriée.
  //   - La fonction utilise des variables locales telles que 'pokemonMinuscule' et 'filterMinuscule' pour effectuer la comparaison.
  //   - Il est probable que cette fonction soit liée à une fonctionnalité de filtrage dans une application Pokemon.
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
