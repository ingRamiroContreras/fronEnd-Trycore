import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { People} from '../models';
import { map } from 'rxjs/operators';
import { ApiSwapService } from './api_swap.service';

@Injectable()
export class PeoplesService {
  constructor (
    private apiService: ApiSwapService
  ) {}

  get(): Observable<People[]> {
    return this.apiService.get('/people')
      .pipe(map(data => this.getObject(data)));
  }

  getObject(data:any){
    console.log(data.results);
    return data.results;
  }

 

}