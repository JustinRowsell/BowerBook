import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, throwError } from 'rxjs';
import { Interest } from '../models/Interest';
import { Tag } from '../models/Tag';
import { Resource } from '../models/Resource';
import { Progress } from '../models/Progress';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  // tslint:disable-next-line:variable-name
  private _interests = new BehaviorSubject(new Array<Interest>());
  public readonly interests: Observable<Interest[]> = this._interests.asObservable();

  constructor(private http: HttpClient) { }
  getInterests(): void {
    const interestArray = this.http.get(`${environment.coreApi}/api/interests`).pipe(
      map(res => res as Interest[]),
      catchError(err => throwError(err))
    ).subscribe((interests) => {
      console.log(interests);
      this._interests.next(interests);
    });
  }
}
