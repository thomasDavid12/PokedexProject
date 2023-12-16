import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-sheet',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pokemon-sheet.component.html',
  styleUrl: './pokemon-sheet.component.scss'
})
export class PokemonSheetComponent {

  pokedexNumber: number = 0;
  pokemon: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.pokedexNumber = params['pokedexNumber'];
      }
    );
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('https://tyradex.vercel.app/api/v1/pokemon/' + this.pokedexNumber)
      .subscribe((data) => {
        this.pokemon = data;
        console.log(this.pokemon);
      });
  }
}
