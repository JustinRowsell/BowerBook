import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Resource } from '../models/Resource';
import { environment } from '../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private _tags = new BehaviorSubject(new Array<Tag>());
  public readonly tags: Observable<Tag[]> = this._tags.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Tag[]>(`${environment.coreApi}/api/tags`).pipe(
      map(res => res as Tag[]),
      catchError(err => throwError(err))
    ).subscribe((tags) => {
      this._tags.next(tags);
    });
  }

  createNew(model: Tag): Observable<string> {
    return this.http.post(`${environment.coreApi}/api/tags/new`,
    model,
    { responseType: 'text' }).pipe(
      map(res => res),
      catchError(err => throwError(err))
    );
  }
}
