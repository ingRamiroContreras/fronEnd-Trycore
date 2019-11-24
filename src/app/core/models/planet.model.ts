import { Specie } from './specie.model';

export class Planet {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    species: Specie[];

    constructor() {
    }
  }
  