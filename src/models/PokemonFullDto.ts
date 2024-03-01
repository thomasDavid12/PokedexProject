interface Name {
  fr: string;
  en: string;
  jp: string;
}

interface Sprite {
  regular: string;
  shiny: string;
  gmax: string | null;
}

interface Type {
  name: string;
  image: string;
}

interface Talent {
  name: string;
  tc: boolean;
}

interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

interface Resistance {
  name: string;
  multiplier: number;
}

interface Evolution {
  pre: null;
  next: {
    pokedexId: number;
    name: string;
    condition: string;
  }[];
  mega: null;
}

interface Sexe {
  male: number;
  female: number;
}

interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprite;
  types: Type[];
  talents: Talent[];
  stats: Stats;
  resistances: Resistance[];
  evolution: Evolution;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: Sexe;
  catch_rate: number;
  level_100: number;
  forme: null;
}

export class PokemonFullDto {
  pokedex_id: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprite;
  types: Type[];
  talents: Talent[];
  stats: Stats;
  resistances: Resistance[];
  evolution: Evolution;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: Sexe;
  catch_rate: number;
  level_100: number;
  forme: null;

  constructor(data: Pokemon) {
    this.pokedex_id = data.pokedex_id;
    this.generation = data.generation;
    this.category = data.category;
    this.name = data.name;
    this.sprites = data.sprites;
    this.types = data.types;
    this.talents = data.talents;
    this.stats = data.stats;
    this.resistances = data.resistances;
    this.evolution = data.evolution;
    this.height = data.height;
    this.weight = data.weight;
    this.egg_groups = data.egg_groups;
    this.sexe = data.sexe;
    this.catch_rate = data.catch_rate;
    this.level_100 = data.level_100;
    this.forme = data.forme;
  }
}
