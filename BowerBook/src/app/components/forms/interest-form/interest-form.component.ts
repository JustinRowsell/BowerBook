import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../../..//models/Resource';
import { Progress } from '../../../models/Progress';
import { InterestService } from '../../../services/interest.service';
import { ResourceService } from '../../../services/resource.service';
import { ProgressService } from '../../../services/progress.service';
import { Interest } from '../../../models/Interest';

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
  styleUrls: ['./interest-form.component.scss']
})
export class InterestFormComponent implements OnInit {
  @Input() interest: Interest;

  resources: Observable<Resource[]>;
  progresses: Observable<Progress[]>;
  constructor(private interestService: InterestService,
              private resourceService: ResourceService,
              private progressService: ProgressService) { }

  ngOnInit() {
    this.progressService.getAll();
    this.progresses = this.progressService.progresses;
    this.resourceService.getAll();
    this.resources = this.resourceService.resources;
  }

  save() {
    if (this.interest.interestId === '-1') { // new

    } else { // update

    }
  }

}
