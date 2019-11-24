import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Planet } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class PlanetsBDService {
  constructor(
    private apiService: ApiService
  ) { }

  get(): Observable<Planet[]> {
    return this.apiService.get('/Planets/')
      .pipe(map(data => data));
  }

  destroy(slug) {
    return this.apiService.delete('/Planets/' + slug);
  }

  save(planet:Planet): Observable<Planet> {
    return this.apiService.post('/Planets', planet)
      .pipe(map(data => data));

  }

}
