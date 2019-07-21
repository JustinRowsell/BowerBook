import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/Resource';

@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.scss']
})
export class NewResourceComponent implements OnInit {
  resName: string;
  link: string;

  constructor(private resService: ResourceService) { }

  ngOnInit() {
  }

  create() {
    const model = new Resource();
    model.resourceName = this.resName;
    model.resourceLink = this.link;
    this.resService.createNew(model).subscribe((id) => {
      console.log('New Resource: ' + id);
    });
  }
}
