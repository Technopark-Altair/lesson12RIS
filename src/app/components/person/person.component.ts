import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from 'src/app/interfaces/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  id: number | undefined;
  person: IPerson | undefined;
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log('id', this.id);
    });
  }

  ngOnInit(): void {
    if (this.id !== undefined) {
      console.log('id', this.id);
      this.person = this.personService.getPersonById(this.id);
    } else {
      console.log('no id');
    }
  }
}
