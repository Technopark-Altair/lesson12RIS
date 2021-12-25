import { IPerson } from './../../interfaces/person.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    surname: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    challengeName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    place: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3),
    ]),
    isWinner: new FormControl(null),
  });
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    let person: IPerson = this.form.value as IPerson;
    this.personService.addPerson(person);
    this.router.navigate(['/people']);
  }
}
