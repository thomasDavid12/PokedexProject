import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PokedexProject';
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
    console.log(this.pokemons);
  }

  fetchData() {
    this.http.get<any[]>('https://tyradex.vercel.app/api/v1/pokemon')
      .subscribe(response => {
        this.pokemons = response.map((data: any) => ({
          name: data.name.fr,
          pokedexNumber: data.pokedexId
        }));
      });
  }
}


