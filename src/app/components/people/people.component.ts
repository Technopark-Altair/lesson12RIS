import { IPerson } from './../../interfaces/person.model';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: IPerson[];
  constructor(private personService: PersonService) {
    this.people = this.personService.getPeople();
  }

  ngOnInit(): void {}
}
