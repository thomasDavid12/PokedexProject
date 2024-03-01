export class PokemonLineDto {
  name: string;
  pokedexNumber: number;
  spritePath: string;

  constructor(name: string, pokedexNumber: number, spritePath: string) {
    this.name = name;
    this.pokedexNumber = pokedexNumber;
    this.spritePath = spritePath;
  }
}
