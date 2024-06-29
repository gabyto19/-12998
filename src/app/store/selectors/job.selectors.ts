// src/app/store/selectors/job.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Job } from '../../models/job.model';

export const selectJobs = createFeatureSelector<Job[]>('job');

export const selectAllJobs = createSelector(
  selectJobs,
  (state: Job[]) => state
);
