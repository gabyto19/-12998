// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor() {}

  // Mock API call to get jobs
  getJobs(): Observable<Job[]> {
    // Replace with actual API call
    return of([]);
  }
}
