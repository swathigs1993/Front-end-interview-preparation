import { Component, OnInit } from '@angular/core';
import {DataViewModule} from 'primeng/dataview';
import { Observable } from 'rxjs';
import { CountryService } from './../country.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  countryList: any;
  countryListCopy: any;
  cities: any;
  selectedCity: any;
  val: boolean;

  constructor(private countryService: CountryService, private route: ActivatedRoute,
    private router: Router) {
     }
 
  ngOnInit() {
    this.countryService.getCountryList().subscribe(data => {
       this.countryList = data;
       this.countryListCopy = this.countryList;
       this.countryService.setCountryLists(this.countryList);
       let flags = [], output = [];
       for(let i = 0; i < this.countryList.length;i++) {
           if( flags[this.countryList[i].region]) continue;
           flags[this.countryList[i].region] = true;
           output.push(this.countryList[i]);
       }
        this.cities = output;
    });
   
  }

  navigateToDetail(country) {
     console.log(country);
     this.countryService.setCountry(country);
     this.router.navigate(['/detail']);
  }

  onRegionChange(selected) {
    this.countryListCopy = this.countryList.filter(con => {
       return con.region == selected.region;
    });
  }

}
