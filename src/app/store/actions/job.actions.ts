import { createAction, props } from '@ngrx/store';
import { Job, Position } from '../../models/job.model';

export const addJob = createAction('[Job] Add Job', props<{ job: Job }>());
export const removeJob = createAction('[Job] Remove Job', props<{ id: string }>());
export const addPosition = createAction('[Job] Add Position', props<{ jobId: string, position: Position }>());
export const removePosition = createAction('[Job] Remove Position', props<{ jobId: string, positionId: string }>());
