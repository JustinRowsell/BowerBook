import { Component, OnInit, Input } from '@angular/core';
import { Interest } from '../../models/Interest';

@Component({
  selector: 'app-interest-list-item',
  templateUrl: './interest-list-item.component.html',
  styleUrls: ['./interest-list-item.component.scss']
})
export class InterestListItemComponent implements OnInit {
  @Input() interest: Interest;
  constructor() { }

  ngOnInit() {
  }

}
