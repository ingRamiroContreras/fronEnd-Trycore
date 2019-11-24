import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { People, Specie} from '../models';
import { map } from 'rxjs/operators';
import { ApiSwapService } from './api_swap.service';

@Injectable()
export class SpeciesService {
  constructor (
    private apiService: ApiSwapService
  ) {}

  get(): Observable<Specie[]> {
    return this.apiService.get('/species' )
      .pipe(map(data => data.results));
  }

}