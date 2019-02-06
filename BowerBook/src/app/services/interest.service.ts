import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Interest } from '../models/Interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor() { }
  getInterests(): Observable<Interest[]> {
    const interests = new Array<Interest>();
    interests.push({
      interestName: 'Test Interest One',
      interestId: 1,
      category: 'Programming'
    });
    interests.push({
      interestName: 'Test Interest Two',
      interestId: 2,
      category: 'Health'
    });
    interests.push({
      interestName: 'Test Interest Three',
      interestId: 3,
      category: 'Programming'
    });
    return of(interests);
  }

  getInterestById(id: number): Interest {
    return {
      interestName: 'Test Interest Three',
      interestId: 3,
      category: 'Programming'
    };
  }
}
