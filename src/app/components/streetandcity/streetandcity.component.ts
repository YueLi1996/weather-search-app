import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streetandcity',
  templateUrl: './streetandcity.component.html',
  styleUrls: ['./streetandcity.component.css']
})
export class StreetandcityComponent implements OnInit {

  
  constructor() { 
    
  }

  ngOnInit(){

  }

  inputStreet:any = ""
  inputCity:any = ""
  citydisable:any = "false"
  streetdisable:any = "false"
  
}
