import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './animal/list/list.component';
import { FormComponent } from './animal/form/form.component';
import { AnimalRoutingModule } from './animal/animal-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [CommonModule,AnimalRoutingModule,ReactiveFormsModule,
SharedModule
  ],
  exports: [],
})
export class FeaturesModule { }
