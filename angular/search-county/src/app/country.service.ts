import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country: any;
  countryList: any;
  constructor(private http: HttpClient) { }

  getCountryList(): Observable<any> {
   return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  setCountry(country) {
    this.country = country;
  }

  getCountry() {
    return this.country;
  }

  setCountryLists(list) {
    this.countryList = list;
  }

  getCountryLists() {
    return this.countryList;
  }
}
