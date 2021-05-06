import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs?: Job[];
  query: string='';

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(res => this.jobs = res)
  }

  public search (event: any){
    this.jobsService.getSearch(event)
    .subscribe(res => {
      console.log(res),
      this.jobs = res
    })
  }

  public searchLanguages(filter: any){
    filter = this.jobsService.getSearchLanguages()
      .subscribe(res => this.jobs = res)
  }


}
