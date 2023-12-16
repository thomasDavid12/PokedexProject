import { Component } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
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
