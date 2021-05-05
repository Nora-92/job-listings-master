import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../models/job.interface';

interface JobDetail{
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
}

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.scss']
})
export class CompanyDescriptionComponent implements OnInit {

  @Input() job?: Job;

  jobDetail: Job[] = [];

  constructor(private jobS: JobsService) { }

  ngOnInit(): void {
  }

  makeJob(company: Job): JobDetail{
    return{
      company: company.company, 
      logo: company.logo,
      new: company.new,
      featured: company.featured,
      position: company.position,
      role: company.role,
      level: company.level,
      postedAt: company.postedAt,
      contract: company.contract,
      location: company.location
    }
  }

}
