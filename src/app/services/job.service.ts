import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor() {}

  getJobs(): Observable<Job[]> {
    return of([]);
  }
}
