import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JobService } from '../../services/job.service';
import * as JobActions from '../actions/job.actions';

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService
  ) {}

  // Example effect for loading jobs
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.addJob),
      mergeMap(() =>
        this.jobService.getJobs().pipe(
          map(jobs => ({ type: '[Job API] Jobs Loaded Success', payload: jobs })),
          catchError(() => of({ type: '[Job API] Jobs Loaded Failure' }))
        )
      )
    )
  );
}
