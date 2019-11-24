import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  ApiSwapService
} from './services';
import { PeoplesService } from './services/people.service';
import { PlanetsService } from './services/planet.service';
import { SpeciesService } from './services/species-service';
import { PlanetsBDService } from './services/planetBD.service';
import { PeoplesBDService } from './services/peopleBD.service';
import { SpeciesBDService } from './services/specieDB.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ApiSwapService,
    PeoplesService,
    PlanetsService,
    SpeciesService,
    PlanetsBDService,
    PeoplesBDService,
    SpeciesBDService
  ],
  declarations: []
})
export class CoreModule { }
