import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job.interface';



interface JobDetail {
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
}

type Filter = {[key: string]: string};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() job?: Job;

  @Input() filters = [
    { type: 'role', value: '' },
    { type: 'level', value: '' },
    { type: 'languages', value: ''},
    { type: 'tools', value: '' }
  ]

  @Output() onFilterSelect: EventEmitter<Filter> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  handleFilterSelection(filter: Filter){
    this.onFilterSelect.emit(filter);
  }


}
