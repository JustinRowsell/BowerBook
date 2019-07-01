import { Injectable } from '@angular/core';
import { Progress } from '../models/Progress';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private _progresses = new BehaviorSubject(new Array<Progress>());
  public readonly progresses: Observable<Progress[]> = this._progresses.asObservable();

  constructor(private http: HttpClient) { }
  getAll(): void {
    this.http.get<Progress[]>(`${environment.coreApi}/api/progress`).pipe(
      map(res => res as Progress[]),
      catchError(err => throwError(err))
    ).subscribe((progresses) => {
      this._progresses.next(progresses);
    });
  }
}
