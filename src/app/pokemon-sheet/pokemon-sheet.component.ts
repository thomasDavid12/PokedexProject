import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonFullDto } from '../../models/PokemonFullDto';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-sheet',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatIconModule],
  templateUrl: './pokemon-sheet.component.html',
  styleUrl: './pokemon-sheet.component.scss',
})
export class PokemonSheetComponent {
  pokedexNumber: number = 0;
  pokemon: PokemonFullDto | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pokedexNumber = params['pokedexNumber'];
    });
    this.fetchData();
  }

  private fetchData(): void {
    this.http
      .get<PokemonFullDto>(
        'https://tyradex.vercel.app/api/v1/pokemon/' + this.pokedexNumber
      )
      .subscribe((data) => {
        this.pokemon = data;
      });
  }

  public OnBackButtonClick(): void {
    this.location.back();
  }
}
