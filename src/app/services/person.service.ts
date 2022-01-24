import { map, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { IPerson } from './../interfaces/person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  people: BehaviorSubject<IPerson[]> = new BehaviorSubject<IPerson[]>([]);
  constructor(private http: HttpClient) {}
  getPeopleObs(): Observable<IPerson[]> {
    return this.people.asObservable();
  }
  getPeople(): IPerson[] {
    return this.people.getValue();
  }
  updatePeople(): void {
    this.http
      .get<IPerson[]>(`${environment.fbDbUrl}person.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object.keys(response).map((key) => ({
            ...response[key],
            id: key,
          }));
        })
      )
      .subscribe((people: IPerson[]) => {
        this.people.next(people);
      });
  }

  addPerson(person: IPerson): void {
    this.http
      .post<{ name: string }>(`${environment.fbDbUrl}person.json`, person)
      .pipe(
        tap((resp: { name: string }) => {
          person = {
            ...person,
            id: resp.name,
          };
          this.people.next([...this.getPeople(), person]);
        })
      )
      .subscribe();
  }

  getPersonById(id: string): IPerson | undefined {
    return this.getPeople().find((person: IPerson) => person.id === id);
  }
}
