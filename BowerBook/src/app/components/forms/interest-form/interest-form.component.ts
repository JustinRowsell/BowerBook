import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Resource } from '../../..//models/Resource';
import { Progress } from '../../../models/Progress';
import { InterestService } from '../../../services/interest.service';
import { ResourceService } from '../../../services/resource.service';
import { ProgressService } from '../../../services/progress.service';
import { Interest } from '../../../models/Interest';
import { Tag } from '../../../models/Tag';
import { FormControl } from '@angular/forms';
import { TagService } from '../../../services/tag.service';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../../app.config';
import { IAppConfig } from '../../../app.config';

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
  styleUrls: ['./interest-form.component.scss']
})
export class InterestFormComponent implements OnInit {
  @Input() interest: Interest;

  resources: Observable<Resource[]>;
  progresses: Observable<Progress[]>;
  tags: Observable<Tag[]>;

  addResources = new Array<Resource>();
  selectedResource: Resource;

  addTags = new Array<Tag>();
  selectedTag: Tag;

  name: string;
  description: string;
  category: string;
  progress: Progress;
  tagName: string;

  constructor(private interestService: InterestService,
              private resourceService: ResourceService,
              private progressService: ProgressService,
              private tagService: TagService,
              private router: Router,
              @Inject(APP_CONFIG) private config: IAppConfig) { }

  ngOnInit() {
    this.progressService.getAll();
    this.progresses = this.progressService.progresses;
    this.resourceService.getAll();
    this.resources = this.resourceService.resources;
    this.tagService.getAll();
    this.tags = this.tagService.tags;
  }

  queueResource() {
    console.log(this.selectedResource);
    this.addResources.push(this.selectedResource);
  }

  removeResource(resource: Resource) {
    this.addResources.splice(this.addResources.indexOf(resource));
  }

  setProgressId(resource: Resource, progress: Progress) {
    resource.progress = progress;
  }

  queueTag() {
    console.log(this.selectedTag);
    this.addTags.push(this.selectedTag);
  }

  removeTag(tag: Tag) {
    this.addTags.splice(this.addTags.indexOf(tag));
  }

  save() {
    this.interest.interestName = this.name;
    this.interest.category = this.category;
    this.interest.description = this.description;
    this.interest.resources = this.addResources;
    this.interest.tags = this.addTags;
    if (this.interest.interestId === '-1') { // new
      this.interestService.createNew(this.interest).subscribe((id) => {
        this.router.navigateByUrl(`/interest?${this.config.idParam}=${id}`);
      });
    } else { // update
      this.interestService.update(this.interest);
    }
  }

}
