import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { InterestService } from '../../services/interest.service';
import { Interest } from '../../models/Interest';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  interests: Interest[];
  getInterestSub: Subscription;
  loaded = false;
  interestsSub: Subscription;

  constructor(private service: InterestService) { }

  ngOnInit() {
    this.service.getInterests();
    this.interestsSub = this.service.interests.subscribe((interests) => {
      this.interests = interests;
      if (interests && interests.length > 0) {
        this.loaded = true;
      }
    });
  }

  ngOnDestroy() {
    this.interestsSub.unsubscribe();
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
}
