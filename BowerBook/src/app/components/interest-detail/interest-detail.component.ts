import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InterestService } from '../../services/interest.service';
import { Interest } from '../../models/Interest';
import { APP_CONFIG, IAppConfig } from '../../app.config';
import { map, find } from 'rxjs/operators';

@Component({
  selector: 'app-interest-detail',
  templateUrl: './interest-detail.component.html',
  styleUrls: ['./interest-detail.component.scss']
})
export class InterestDetailComponent implements OnInit {
  idParam: string;
  interest = new Interest();
  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private activedRoute: ActivatedRoute,
              private service: InterestService) { }

  ngOnInit() {
    this.idParam = this.activedRoute.snapshot.queryParamMap.get(this.config.idParam);
    this.service.getInterests();
    this.service.interests.pipe(
      map(interests => {
        let foundInterest = interests.find(i => i._id === this.idParam);
        if (foundInterest === undefined || foundInterest === null) {
          foundInterest = this.getNotFoundObj();
        }
        return foundInterest;
      })
    ).subscribe(interest => {
      this.interest = interest;
    });
  }

  getNotFoundObj(): Interest {
    const interest = new Interest();
    interest.interestName = 'Not found';
    interest._id = 'NOT FOUND BITCH"';
    return interest;
  }


}
