import { Component, OnInit, Input, Inject } from '@angular/core';
import { Interest } from '../../models/Interest';
import { Router } from '@angular/router';
import { APP_CONFIG, IAppConfig } from '../..//app.config';

@Component({
  selector: 'app-interest-expansion-panel',
  templateUrl: './interest-expansion-panel.component.html',
  styleUrls: ['./interest-expansion-panel.component.scss']
})
export class InterestExpansionPanelComponent implements OnInit {
  @Input() interest: Interest;
  constructor(private router: Router, @Inject(APP_CONFIG) private config: IAppConfig) { }

  ngOnInit() {
  }

  showDetail(interest: Interest) {
    this.router.navigateByUrl(`/interest?${this.config.idParam}=${interest.interestId}`);
  }
}
