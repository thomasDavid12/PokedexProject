import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSheetComponent } from './pokemon-sheet.component';

describe('PokemonSheetComponent', () => {
  let component: PokemonSheetComponent;
  let fixture: ComponentFixture<PokemonSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
