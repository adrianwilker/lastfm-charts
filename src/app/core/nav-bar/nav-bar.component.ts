import { Component, OnInit } from "@angular/core";
import { Countries } from "../../../assets/countries";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  ngOnInit(): void{
    this.retrieveCountries();
  }

  _countries: String[] = [];
  
  retrieveCountries(): Array<String>{
    this._countries = Countries.getCountries();
    return this._countries;
  }

  createRange(number: any){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
  
}