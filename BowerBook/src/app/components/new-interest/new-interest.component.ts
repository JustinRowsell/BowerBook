import { Component, OnInit } from '@angular/core';
import { InterestService } from '../../services/interest.service';
import { ResourceService } from '../../services/resource.service';
import { ProgressService } from '../../services/progress.service';
import { Resource } from '../../models/Resource';
import { Observable } from 'rxjs';
import { Progress } from '../../models/Progress';
import { Interest } from '../../models/Interest';

@Component({
  selector: 'app-new-interest',
  templateUrl: './new-interest.component.html',
  styleUrls: ['./new-interest.component.scss']
})
export class NewInterestComponent implements OnInit {
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

}
