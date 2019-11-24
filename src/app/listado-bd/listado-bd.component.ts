import { Component, OnInit } from '@angular/core';
import { PlanetsBDService } from '../core/services/planetBD.service';
import { PeoplesBDService } from '../core/services/peopleBD.service';
import { SpeciesBDService } from '../core/services/specieDB.service';
import { People, Planet, Specie } from '../core/models';

@Component({
  selector: 'app-listado-bd',
  templateUrl: './listado-bd.component.html',
  styleUrls: ['./listado-bd.component.css']
})
export class ListadoBDComponent implements OnInit {

  private peoples: People[];
  private planets: Planet[];
  private species: Specie[];

  constructor(
    private planetDbService: PlanetsBDService,
    private peoplesBDService: PeoplesBDService,
    private speciesBDService: SpeciesBDService
  ) { }

  ngOnInit() {
    this.getPeoples();
    this.getPlanets();
    this.getSpecies();
  }

  getPeoples() {
    this.peoplesBDService.get().subscribe(p => this.peoples = p);
  }

  getPlanets() {
    this.planetDbService.get().subscribe(p => this.planets = p);
  }

  getSpecies() {
    this.speciesBDService.get().subscribe(s => this.species = s);
  }

}
