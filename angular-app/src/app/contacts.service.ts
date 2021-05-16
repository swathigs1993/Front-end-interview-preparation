import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContactList() {
    return [{
      name: 'swathi',
      role: 'developer'
    },
    {
      name: 'Chikku',
      role: 'Lead'
    },
    {
      name: 'Vatsa',
      role: 'Student'
    },
    {
      name: 'Nidhi',
      role: 'doctor'
    },
    {
      name: 'Teddy',
      role: 'CEO'
    }];
  }

  showDirectlyOnHTML() {
    alert("Ï am directly called on html from service")
  }
}
