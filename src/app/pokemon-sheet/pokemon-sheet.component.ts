import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonFullDto } from '../../models/PokemonFullDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-sheet',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pokemon-sheet.component.html',
  styleUrl: './pokemon-sheet.component.scss'
})
export class PokemonSheetComponent {

  pokedexNumber: number = 0;
  pokemon: PokemonFullDto | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.pokedexNumber = params['pokedexNumber'];
      });
    this.fetchData();
  }

  fetchData() {
    this.http.get<PokemonFullDto>('https://tyradex.vercel.app/api/v1/pokemon/' + this.pokedexNumber)
      .subscribe((data) => {
        this.pokemon = data;
      });
  }
}