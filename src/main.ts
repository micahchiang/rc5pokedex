import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { environment } from './app';
import { PokedexAppModule } from './app/pokedex.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PokedexAppModule);

