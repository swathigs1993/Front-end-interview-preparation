import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contactList: any;
  constructor(public ContactsServiceVar: ContactsService) { } //Make it public if it shld be used even in HTML

  ngOnInit() {
    this.contactList = this.ContactsServiceVar.getContactList();
  }

}
