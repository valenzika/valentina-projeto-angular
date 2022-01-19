import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/services/animal/animal.service';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

