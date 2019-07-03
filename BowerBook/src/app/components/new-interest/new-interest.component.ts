import { Component, OnInit } from '@angular/core';
import { InterestService } from '../../services/interest.service';
import { ResourceService } from '../../services/resource.service';
import { ProgressService } from '../../services/progress.service';
import { Resource } from '../../models/Resource';
import { Observable } from 'rxjs';
import { Progress } from '../../models/Progress';
import { Interest } from '../../models/Interest';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-interest',
  templateUrl: './new-interest.component.html',
  styleUrls: ['./new-interest.component.scss']
})
export class NewInterestComponent implements OnInit {
  newInterest: Interest;
  constructor(private interestService: InterestService,
              private resourceService: ResourceService,
              private progressService: ProgressService) { }

  ngOnInit() {
    this.newInterest = this.interestService.getNewObj();
  }

}
