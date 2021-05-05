import { Component, Input, OnInit } from '@angular/core';

interface Pill {
  company: string;
  new: boolean;
  featured: boolean;
}

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {

  @Input() pill?: Pill;

  constructor() { }

  ngOnInit(): void {
  }

}
