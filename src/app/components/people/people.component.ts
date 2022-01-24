import { IPerson } from 'src/app/interfaces/person.model';
import { Observable } from 'rxjs';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Observable<IPerson[]>;
  constructor(private personService: PersonService) {
    this.people = this.personService.getPeopleObs();
  }

  ngOnInit(): void {
    this.personService.updatePeople();
  }
}
