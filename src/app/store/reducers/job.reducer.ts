// job.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addJob, removeJob, addPosition, removePosition } from '../actions/job.actions';
import { Job } from '../../models/job.model';

export const initialState: Job[] = [];

const _jobReducer = createReducer(
  initialState,
  on(addJob, (state, { job }) => [...state, job]),
  on(removeJob, (state, { id }) => state.filter(job => job.id !== id)),
  on(addPosition, (state, { jobId, position }) => state.map(job => job.id === jobId ? { ...job, positions: [...job.positions, position] } : job)),
  on(removePosition, (state, { jobId, positionId }) => state.map(job => job.id === jobId ? { ...job, positions: job.positions.filter(pos => pos.id !== positionId) } : job))
);

export function jobReducer(state: any, action: any) {
  return _jobReducer(state, action);
}
