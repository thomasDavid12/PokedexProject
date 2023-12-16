import { Routes } from '@angular/router';
import { PokemonSheetComponent } from './pokemon-sheet/pokemon-sheet.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'pokemon', component: PokemonSheetComponent },
    { path: '', component: MainComponent }
  ];