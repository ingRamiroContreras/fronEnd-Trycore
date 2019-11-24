import { Specie } from './specie.model';

export  class People { 
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    specie: Specie;

    constructor() {
    }
}