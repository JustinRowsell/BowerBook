import { Component, OnInit, OnDestroy } from '@angular/core';
import { InterestService } from 'src/app/services/interest.service';
import { Interest } from 'src/app/models/Interest';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  interests: Interest[];
  getInterestSub: Subscription;

  constructor(private service: InterestService) { }

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

}
