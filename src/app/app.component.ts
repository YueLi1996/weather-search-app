import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
}
  // let obj:any = document.getElementsByClassName("checkbox")[0];
  // if(obj.checked == true)
  // {
  //   this.disableInput()
  // }
  // public disableInput() {  
  //   console.log("hello")
  //   var streetDOM:any = document.getElementById("street")
  //   var cityDOM:any = document.getElementById("city")
  //   var stateDOM:any = document.getElementById("state")
  //   var searchbtnDOM:any = document.getElementById("searchbtn")
  //   // handle checkbox of current location
  //   var checkbox:any = document.querySelectorAll('input[type="checkbox"]')[0];
  //   checkbox.addEventListener("click", () => {
  //     if(checkbox.checked) {
  //         if(streetDOM.value != "" || cityDOM.value != "") {
  //             streetDOM.value = ""
  //             cityDOM.value = ""
  //         }
  //         streetDOM.disabled = "true"
  //         cityDOM.disabled = "true"
  //         stateDOM.value = "default"
  //         stateDOM.disabled = "true"
  //     }
  //     else {
  //         streetDOM.disabled = ""
  //         cityDOM.disabled = ""
  //         stateDOM.disabled = ""
  //     }
  //   })
  // // }
