import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/services/animal/animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formAnimal: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      id: '',
      name: '',
      tutor: '',
    });

  }

  submit(event: Animal): void {
    this.animalService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}

