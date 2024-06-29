import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { JobFormComponent } from './job-form/job-form.component';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { jobReducer } from './store/reducers/job.reducer';
import { JobEffects } from './store/effects/job.effects';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobFormComponent,
    CustomFormControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ job: jobReducer }),
    EffectsModule.forRoot([JobEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
