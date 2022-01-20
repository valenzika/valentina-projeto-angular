import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './animal/list/list.component';
import { FormComponent } from './animal/form/form.component';
import { AnimalRoutingModule } from './animal/animal-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [],
  imports: [CommonModule,FeaturesRoutingModule,ReactiveFormsModule],
  exports: [],
})
export class FeaturesModule { }
