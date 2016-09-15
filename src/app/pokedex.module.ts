import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PokedexAppComponent } from './pokedex.component';
import { PokedexService } from './services/pokedex.service';
import { Capitalize } from './capitalize.pipe';


@NgModule({
	declarations: [PokedexAppComponent, Capitalize],
	imports: [BrowserModule, HttpModule],
	providers: [PokedexService],
	bootstrap: [PokedexAppComponent]
})

export class PokedexAppModule {}