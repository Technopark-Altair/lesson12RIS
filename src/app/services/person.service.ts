import { IPerson } from './../interfaces/person.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private maxId = 0;
  people: IPerson[] = [];
  constructor() {}
  getPeople(): IPerson[] {
    return [...this.people];
  }

  addPerson(person: IPerson): void {
    person.id = this.maxId;
    this.people.push(person);
    this.maxId++;
    console.log(this.people);
  }

  getPersonById(id: number): IPerson | undefined {
    return this.people.find((person: IPerson) => person.id === id);
  }
}
