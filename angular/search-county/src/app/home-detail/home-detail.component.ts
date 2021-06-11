import { Component, OnInit } from '@angular/core';
import { CountryService } from './../country.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  selectedCountry: any;
  countryList: any;

  constructor(private countryService: CountryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.selectedCountry = this.countryService.getCountry();
    this.countryList = this.countryService.getCountryLists();
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  navigateToCountry(border) {
    let countryName =  this.countryList.filter(con => {
       return con.alpha3Code === border
     });
    this.selectedCountry = countryName[0];
  }

}
