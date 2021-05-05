import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../models/job.interface';



@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() imageUrl?: string; 

  constructor() { }

  ngOnInit(): void {
  }


}
