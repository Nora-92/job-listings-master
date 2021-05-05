import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent implements OnInit {

  @Input() position?: string;

  @Input() dati = {
    postedAt: '',
    contract: '',
    location: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
