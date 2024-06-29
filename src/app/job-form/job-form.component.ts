// src/app/job-form/job-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addJob, removeJob, addPosition, removePosition } from '../store/actions/job.actions';
import { Job, Position } from '../models/job.model';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { selectAllJobs } from '../store/selectors/job.selectors';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobForm!: FormGroup;
  jobs$: Observable<Job[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.jobs$ = this.store.select(selectAllJobs);
  }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      companyName: ['', Validators.required],
      companyWebsite: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?')]],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([])
    });
  }

  get positions(): FormArray {
    return this.jobForm.get('positions') as FormArray;
  }

  addPosition(): void {
    const positionForm = this.fb.group({
      id: [uuid()],
      name: ['', Validators.required],
      level: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.positions.push(positionForm);
  }

  removePosition(index: number): void {
    this.positions.removeAt(index);
  }

  addJob(): void {
    if (this.jobForm.valid) {
      const job: Job = { id: uuid(), ...this.jobForm.value };
      this.store.dispatch(addJob({ job }));
      this.jobForm.reset();
      this.positions.clear();
    }
  }

  removeJob(id: string): void {
    this.store.dispatch(removeJob({ id }));
  }
}
