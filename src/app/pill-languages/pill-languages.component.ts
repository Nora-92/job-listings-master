import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-pill-languages',
  templateUrl: './pill-languages.component.html',
  styleUrls: ['./pill-languages.component.scss']
})
export class PillLanguagesComponent implements OnInit {

  @Input() pillText='';
  @Input() pillType='';


  constructor() { }

  ngOnInit(): void {
  }



}
