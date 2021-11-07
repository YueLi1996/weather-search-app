import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @ViewChild('street_and_city') street_and_city:any
  @ViewChild('select_state') select_city:any
  @ViewChild('auto_detect') auto_detect:any
  @ViewChild('clear') clear:any
  
  constructor() { }

  ngOnInit(): void {
  }

  public handleInput(){
    console.log(this.street_and_city.inputStreet); // street
    console.log(this.street_and_city.inputCity); // city
    console.log(this.select_city.inputState); // state
    console.log(this.auto_detect.autoClick);
    let checkbox = this.auto_detect.autoClick;
    let streetDOM = this.street_and_city.inputStreet;
    let cityDOM = this.street_and_city.inputCity;
    let stateDOM = this.select_city.inputState;
    if(checkbox == true)
    {
      console.log(this.select_city.statedisable);
      
      if(streetDOM != "" || cityDOM != "") {
        this.street_and_city.inputStreet = ""
        this.street_and_city.inputCity = ""
    }
        this.street_and_city.citydisable = "true"
        this.street_and_city.streetdisable = "true"
        this.select_city.statedisable = "true"
        this.select_city.inputState = "Select your state"
        // stateDOM.disabled = "true"
    }
    else {
      streetDOM = ""
      cityDOM = ""
      this.street_and_city.citydisable = "false"
      this.street_and_city.streetdisable = "false"
      this.select_city.statedisable = "false"
      // stateDOM.disabled = ""
    }
    //handle submit button
    this.CheckTosubmit()
    // handle clear button
    // var clearButton = document.getElementById('clearbtn')
    // clearButton.addEventListener("click", () => {
    //     streetDOM.value = ""
    //     cityDOM.value = ""
    //     stateDOM.value = "default"
    // })
  }

  public CheckTosubmit()
  {
    let streetDOM = this.street_and_city.inputStreet;
    let cityDOM = this.street_and_city.inputCity;
    let stateDOM = this.select_city.inputState;
    let searchbtnDOM = this.clear.searchbtnDOM
    //handle submit button
    if (streetDOM == "" || cityDOM == "" || stateDOM == "Select your state") {
      this.clear.searchbtnDOM = true
    }
    else {
      console.log("searchbtnDOM:", searchbtnDOM);
      this.clear.searchbtnDOM = false
    }
    
  }
}
