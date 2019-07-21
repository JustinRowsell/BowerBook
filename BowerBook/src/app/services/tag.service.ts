import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Resource } from '../models/Resource';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
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
}
