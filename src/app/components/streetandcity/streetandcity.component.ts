import { Component, OnInit } from '@angular/core';
import { ClearService } from '../../services/clear.service';


@Component({
  selector: 'app-streetandcity',
  templateUrl: './streetandcity.component.html',
  styleUrls: ['./streetandcity.component.css']
})
export class StreetandcityComponent implements OnInit {

  
  constructor(public clearObj:ClearService) { 
    
  }

  ngOnInit(){

  }

  inputStreet:any = ""
  inputCity:any = ""
  citydisable:any = "false"
  streetdisable:any = "false"
  
}
