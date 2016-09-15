import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PokedexAppComponent } from '../app/pokedex.component';

beforeEachProviders(() => [PokedexAppComponent]);

describe('App: Pokedex', () => {
  it('should create the app',
      inject([PokedexAppComponent], (app: PokedexAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pokedex works!\'',
      inject([PokedexAppComponent], (app: PokedexAppComponent) => {
    expect(app.title).toEqual('pokedex works!');
  }));
});
