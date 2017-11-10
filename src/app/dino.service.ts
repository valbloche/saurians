import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Dinosaure } from './dinosaure';
import { DINOS } from './dinosaures/db_dinos';

@Injectable()
export class DinoService {

  constructor() { }

  getDinos(): Observable<Dinosaure[]>{
    return of(DINOS);
  }
}
