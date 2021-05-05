import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './models/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(){
    // this.http.get<Job[]>('/api/jobs?languages=(python|javascript|html)&tools=(react)').subscribe(console.log)
    // this.http.get<Job[]>('/api/jobs?tools=(ror|react)').subscribe(console.log)

    const makeSearchString = (filters: string[]) => {
      return `(${filters.join('|')})`
    }

    console.log(makeSearchString(['react', 'ror']))

    const requestOptions = new HttpParams({ fromObject: { tools: makeSearchString(['react', 'ror']), languages: '' } })

    console.log(requestOptions)

    this.http.get<Job[]>('/api/jobs', { params: requestOptions }).subscribe(console.log)
  }
}
