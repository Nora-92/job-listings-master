import { Component, Input, OnInit } from '@angular/core';

interface Languages {
  role: string;
  level: string;
  languages: string[];
  tools: any[];
}


@Component({
  selector: 'app-pill-languages',
  templateUrl: './pill-languages.component.html',
  styleUrls: ['./pill-languages.component.scss']
})
export class PillLanguagesComponent implements OnInit {

  @Input() languages?: Languages;

  constructor() { }

  ngOnInit(): void {
  }

}
