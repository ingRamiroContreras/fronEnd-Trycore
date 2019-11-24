import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../core/services/people.service';
import { PlanetsService } from '../core/services/planet.service';
import { SpeciesService } from '../core/services/species-service';
import { People, Planet, Specie } from '../core/models';
import { PlanetsBDService } from '../core/services/planetBD.service';
import { PeoplesBDService } from '../core/services/peopleBD.service';
import { SpeciesBDService } from '../core/services/specieDB.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private peoples: People[];
  private planets: Planet[];
  private species: Specie[];

  constructor(
    private peopleService: PeoplesService,
    private planetService: PlanetsService,
    private specieService: SpeciesService,
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
    this.peopleService.get().subscribe(p => this.peoples = p);
  }

  getPlanets() {
    this.planetService.get().subscribe(p => this.planets = p);
  }

  getSpecies() {
    this.specieService.get().subscribe(s => this.species = s);
  }

  // Planet

  checkPlanet(planet: Planet, event: any) {
    console.log("planet",planet);
    if (event.target.checked) {
      this.savePlanet(planet);
    } else {
      this.deletePlanet(planet.id);
    }
  }

  savePlanet(planet: Planet) {
    this.planetDbService.save(planet).subscribe(p => console.log("p", p));
  }

  deletePlanet(id: number) {
    this.planetDbService.destroy(id).subscribe(p => console.log("p dlete", p));
  }

  // People

  checkPeople(people: People, event: any) {
    if (event.target.checked) {
      this.savePeople(people);
    } else {
      this.deletePeople(people.id);
    }
  }

  savePeople(people: People) {
    this.peoplesBDService.save(people).subscribe(p => console.log("p", p));
  }

  deletePeople(id: number) {
    this.planetDbService.destroy(id).subscribe(p => console.log("p dlete", p));
  }

  // Specie

  checkSpecie(specie: Specie, event: any) {
    if (event.target.checked) {
      this.saveSpecie(specie);
    } else {
      this.deleteSpecie(specie.id);
    }
  }

  saveSpecie(specie: Specie) {
    this.speciesBDService.save(specie).subscribe(p => console.log("p", p));
  }

  deleteSpecie(id: number) {
    this.speciesBDService.destroy(id).subscribe(p => console.log("p dlete", p));
  }


}
