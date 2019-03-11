import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { InterestService } from 'src/app/services/interest.service';
import { Interest } from 'src/app/models/Interest';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  interests: Observable<Interest[]>;
  getInterestSub: Subscription;

  constructor(private service: InterestService) { }

  ngOnInit() {
    this.interests = this.service.interests;
    this.service.getInterests();
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
