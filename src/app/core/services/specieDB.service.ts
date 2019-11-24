import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Specie } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class SpeciesBDService {
  constructor(
    private apiService: ApiService
  ) { }

  get(): Observable<Specie[]> {
    return this.apiService.get('/Species/')
      .pipe(map(data => data));
  }

  destroy(slug) {
    return this.apiService.delete('/Species/' + slug);
  }

  save(Specie:Specie): Observable<Specie> {
    return this.apiService.post('/Species', Specie)
      .pipe(map(data => data));

  }

}
