import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.scss']
})
export class NewTagComponent implements OnInit {

  tagName: string;

  constructor(private service: TagService) { }

  ngOnInit() {
  }

  create() {
    const tag = new Tag();
    tag.tagName = this.tagName;
    this.service.createNew(tag).subscribe((id) => {
      console.log(id);
    }, (error) => console.error(error));
  }

}
