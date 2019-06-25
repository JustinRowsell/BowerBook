import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, throwError } from 'rxjs';
import { Interest } from '../models/Interest';
import { Tag } from '../models/Tag';
import { Resource } from '../models/Resource';
import { Progress } from '../models/Progress';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  // tslint:disable-next-line:variable-name
  private _interests = new BehaviorSubject(new Array<Interest>());
  public readonly interests: Observable<Interest[]> = this._interests.asObservable();

  constructor(private http: HttpClient) { }
  getInterests(): void {
    const interestArray = this.http.get<Array<Interest>>(`${environment.coreApi}/api/interests`).pipe(
      map(res => res as Interest[]),
      catchError(err => throwError(err))
    ).subscribe((interests) => {
      this._interests.next(interests);
    });
  }
}
