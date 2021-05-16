import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'observable', component: ObservableComponent},
  {path:'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
