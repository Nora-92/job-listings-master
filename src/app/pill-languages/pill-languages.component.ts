import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pill-languages',
  templateUrl: './pill-languages.component.html',
  styleUrls: ['./pill-languages.component.scss']
})
export class PillLanguagesComponent implements OnInit {

  // @Input() role?: string;
  // @Input() level?: string;
  // @Input() languages?: string[];
  // @Input() tools?: any[];

  @Input() pillText='';
  @Input() pillType='';

  constructor() { }

  ngOnInit(): void {
  }

}
