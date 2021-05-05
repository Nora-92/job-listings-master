import { Component, Input, OnInit } from '@angular/core';

interface Dati {
  postedAt: string;
  contract: string;
  location: string;
}

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent implements OnInit {

  @Input() position?: string;

  @Input() dati? : Dati

  constructor() { }

  ngOnInit(): void {
  }

}
