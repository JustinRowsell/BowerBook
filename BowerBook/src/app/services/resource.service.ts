import { Injectable } from '@angular/core';
import { Resource } from '../models/Resource';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private _resources = new BehaviorSubject(new Array<Resource>());
  public readonly resources: Observable<Resource[]> = this._resources.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Resource[]>(`${environment.coreApi}/api/resources`).pipe(
      map(res => res as Resource[]),
      catchError(err => throwError(err))
    ).subscribe((resources) => {
      this._resources.next(resources);
    });
  }

  createNew(model: Resource): Observable<string> {
    return this.http.post(`${environment.coreApi}/api/resources/new`, model, { responseType: 'text'}).pipe(
      map(res => res),
      catchError(err => throwError(err))
    );
  }
}
