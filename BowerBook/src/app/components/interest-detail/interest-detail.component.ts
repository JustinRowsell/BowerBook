import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InterestService } from 'src/app/services/interest.service';
import { Interest } from 'src/app/models/Interest';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-interest-detail',
  templateUrl: './interest-detail.component.html',
  styleUrls: ['./interest-detail.component.scss']
})
export class InterestDetailComponent implements OnInit {
  idParam: number;
  interest: Interest;
  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private activedRoute: ActivatedRoute,
              private service: InterestService) { }

  ngOnInit() {
    this.idParam = +this.activedRoute.params[this.config.idParam];
    this.interest = this.service.getInterestById(this.idParam);
  }
}
