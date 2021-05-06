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

    // const makeSearchString = (filters: string[]) => {
    //   return `(${filters.join('|')})`
    // }

    // console.log(makeSearchString(['react', 'ror']))

    // const requestOptions = new HttpParams({ fromObject: { tools: makeSearchString(['react', 'ror']), languages: '' } })

    // console.log(requestOptions)

    

    // this.http.get<Job[]>('/api/jobs', { params: requestOptions }).subscribe(console.log)
    return this.http.get<Job[]>('/api/jobs')
    //this.http.get<Job[]>('/api/jobs')

  }

  getJobsById(id: number){
    const optionId = new HttpParams({fromObject: {id: ''}})
    this.http.get<Job[]>('/api/jobs', {params: optionId}).subscribe(console.log)
  }

  getSearch(query: string){
    return this.http.get<Job[]>('/api/jobs?company=' + query)

  }

  getSearchLanguages(){
    const makeSearchString = (filters: string[]) => {
      return `(${filters.join('|')})`
    }

    console.log(makeSearchString(['react', 'ror']))

    const tools = ['react', 'ror', 'react', 'sass', 'css', 'javascript', 'ruby', 'vue', 'django', ]
    const languages = ['javascript', 'python', 'html', 'ruby', 'css']
    const levels = ['senior', 'fullstack', 'junior']
    const role = ['frontend', 'midweight', 'backend']

    const requestOptions = new HttpParams({ fromObject: { tools: makeSearchString(tools), 
                                                        languages: makeSearchString(languages),
                                                        level: makeSearchString(levels),
                                                        role: makeSearchString(role) }})

    console.log(requestOptions)

    

    return this.http.get<Job[]>('/api/jobs', { params: requestOptions })
  }


}
