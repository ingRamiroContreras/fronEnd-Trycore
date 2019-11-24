import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet} from '../models';
import { map } from 'rxjs/operators';
import { ApiSwapService } from './api_swap.service';

@Injectable()
export class PlanetsService {
  constructor (
    private apiService: ApiSwapService
  ) {}

  get(): Observable<Planet[]> {
    return this.apiService.get('/planets')
      .pipe(map(data => data.results));
  }

}
