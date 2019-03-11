import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { Interest } from '../models/Interest';
import { Tag } from '../models/Tag';
import { Resource } from '../models/Resource';
import { Progress } from '../models/Progress';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  // tslint:disable-next-line:variable-name
  private _interests = new BehaviorSubject(new Array<Interest>());
  public readonly interests: Observable<Interest[]> = this._interests.asObservable();

  constructor() { }
  getInterests(): void {
    const interestArray = this.mockTestData();
    this._interests.next(interestArray);
  }

  mockTestData(): Interest[] {
    const tagsL = new Array<Tag>();
    tagsL.push({
      tagId: 1,
      tagName: 'Machine Learning'
    },
    {
      tagId: 2,
      tagName: 'Angular'
    });
    const newP: Progress = {
      progressId: 1,
      progressName: 'New',
      color: 'red',
      sequence: 1
    };
    const inP: Progress = {
      progressId: 2,
      progressName: 'In Progress',
      color: 'yellow',
      sequence: 2
    };
    const finP: Progress = {
      progressId: 3,
      progressName: 'Finished',
      color: 'green',
      sequence: 3
    };
    const resourcesL = new Array<Resource>();
    resourcesL.push({
      resourceId: 1,
      resourceName: 'Udemy Course',
      link: 'https://google.com',
      progress: newP
    }, {
      resourceId: 2,
      resourceName: 'Blog Post',
      link: 'https://google.com',
      progress: inP
    }, {
      resourceId: 3,
      resourceName: 'Book',
      link: 'https://google.com',
      progress: finP
    });
    const interests = new Array<Interest>();
    interests.push({
      interestName: 'Test Interest One',
      interestId: 1,
      category: 'Programming',
      description: 'This is a test interest',
      tags: tagsL,
      resources: resourcesL
    });
    interests.push({
      interestName: 'Test Interest Two',
      interestId: 2,
      category: 'Health',
      description: 'This is a test interest',
      tags: tagsL,
      resources: resourcesL
    });
    interests.push({
      interestName: 'Test Interest Three',
      interestId: 3,
      category: 'Programming',
      description: 'This is a test interest',
      tags: tagsL,
      resources: resourcesL
    });
    return interests;
  }
}
