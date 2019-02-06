import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { InterestService } from 'src/app/services/interest.service';
import { Interest } from 'src/app/models/Interest';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  interests: Interest[];
  getInterestSub: Subscription;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, private service: InterestService,
              private router: Router) { }

  ngOnInit() {
    this.getInterestsForUser();
  }

  ngOnDestroy() {
    this.getInterestSub.unsubscribe();
  }

  getInterestsForUser(): void {
    this.getInterestSub = this.service.getInterests().subscribe(
      data => {
        this.interests = data.sort(this.sortInterest);
      },
      error => { console.log(error); }
    );
  }

  sortInterest(itemOne: Interest, itemTwo: Interest): number {
    if (itemOne.category < itemTwo.category) {
      return -1;
    } else if (itemOne.category > itemTwo.category) {
      return 1;
    } else {
      return 0;
    }
  }

  showDetail(interest: Interest) {
    this.router.navigateByUrl(`/interest?${this.config.idParam}=${interest.interestId}`);
  }

}
