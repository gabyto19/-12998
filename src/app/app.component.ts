// src/app/app.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from './models/job.model';
import { removeJob } from './store/actions/job.actions';
import { selectAllJobs } from './store/selectors/job.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobs$: Observable<Job[]>;

  constructor(private store: Store) {
    this.jobs$ = this.store.select(selectAllJobs);
  }

  removeJob(id: string): void {
    this.store.dispatch(removeJob({ id }));
  }
}
