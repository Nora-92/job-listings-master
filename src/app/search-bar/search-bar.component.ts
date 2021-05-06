import { Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  jobSearchControl = new FormControl();


  @Output() onSearch= this.jobSearchControl.valueChanges.pipe(debounceTime(300),distinctUntilChanged())


  constructor() { }


}


