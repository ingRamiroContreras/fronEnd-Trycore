import { Planet } from './planet.model';
import { People } from './people.model';

export class Specie {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    planet: Planet;
    peoples: People[];

    constructor() {
    }
}