import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';
declare function first_chart(more_data:any, lat:any, lng:any):null
declare function oneDay(data:any, date_detail:any):null

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  // @ViewChild('street_and_city') street_and_city:any
  @ViewChild('select_state') select_city:any
  // @ViewChild('auto_detect') auto_detect:any
  // @ViewChild('clear') clear:any
  
  constructor( public http:HttpClient) { }

  ngOnInit(): void {
  }

  inputStreet:any = ""
  inputCity:any = ""
  citydisable:any = "false"
  streetdisable:any = "false"
  autoClick:any = false
  searchbtnDOM:any = true;
  strInfo:any = ""
  cityInfo:any = ""

  // title = 'charts';
  // highcharts = Highcharts;
  // chartOptions1: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };

  public handleInput(){
    // console.log(this.street_and_city.inputStreet); // street
    // console.log(this.street_and_city.inputCity); // city
    // console.log(this.select_city.inputState); // state
    // console.log(this.auto_detect.autoClick);
    let checkbox = this.autoClick;
    let streetDOM = this.inputStreet;
    let cityDOM = this.inputCity;
    let stateDOM = this.select_city.inputState;
    //console.log(checkbox, "values checkbox");
    
    if(checkbox == true)
    {
      //console.log(this.select_city.statedisable, "checkbox is true liangdu");
      
      if(streetDOM != "" || cityDOM != "") {
        this.inputStreet = ""
        this.inputCity = ""
    }
        this.citydisable = "true"
        this.streetdisable = "true"
        this.select_city.statedisable = "true"
        this.select_city.inputState = "Select your state"

        this.http.get("https://ipinfo.io/?token=20ef1690f3db86").subscribe((response:any) => {
          //console.log(response);
          this.strInfo = response.region;
          this.cityInfo = response.city;
        })

        //console.log("inner checkBox: ", this.cityInfo);
        
        // stateDOM.disabled = "true"
        // this.inputStreet = "Los Angeles"
        // this.inputCity = "Los Angeles"
    }
    else {
      streetDOM = ""
      cityDOM = ""
      this.citydisable = "false"
      this.streetdisable = "false"
      this.select_city.statedisable = "false"
     // console.log("this is input street in onclick: ", this.inputStreet);
      
      this.strInfo = this.inputStreet
      this.cityInfo = this.inputCity
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
    let streetDOM = this.inputStreet;
    let cityDOM = this.inputCity;
    let stateDOM = this.select_city.inputState;
    let searchbtnDOM = this.searchbtnDOM
    let checkbox = this.autoClick;
    //handle submit button
    //console.log("checkBox status: ", checkbox);
    
    if (checkbox == true)
    {
      this.searchbtnDOM = false
    }
    else if (streetDOM == "" || cityDOM == "" || stateDOM == "Select your state") {
      this.searchbtnDOM = true
    }
    else{
      //console.log("searchbtnDOM:", searchbtnDOM);
      this.strInfo = this.inputStreet
      this.cityInfo = this.inputCity
      this.searchbtnDOM = false
    }
   
  }
  
  onClickFucntion()
  {
    //console.log("this is false");
    if (this.autoClick == false)
    {
      this.autoClick = true;
    }
    else
    {
      this.autoClick = false;
    }
  }

  doClear() {
    var streetDOM:any = document.getElementById("street")
    var cityDOM:any = document.getElementById("city")
    var stateDOM:any = document.getElementById("state")
    streetDOM.value = ""
    cityDOM.value = ""
    stateDOM.value = "Select your state"
  }

  images = [
    {url: 'assets/Images/unfav_btn.png'},
    {url: 'assets/Images/fav_btn.png'}
  ];

  img = this.images[0];

  changeImg(): void {
    if (this.img.url === this.images[0].url) {
      this.img = this.images[1];
    } else {
      this.img = this.images[0];
    }
  }

  public img_showing02(code_number:any):any
  {
    if(code_number == "1000")
    {
      return "assets/Images/clear_day.svg"
    }
    if(code_number == "1100")
    {
      return "assets/Images/mostly_clear_day.svg"
    }
    if(code_number == "1101")
    {
      return "assets/Images/partly_cloudy_day.svg"
    }
    if(code_number == "1102")
    {
      return "assets/Images/cloudy.svg"
    }
    if(code_number == "1001")
    {
      return "assets/Images/cloudy.svg"
    }
    if(code_number == "2000")
    {
      return "assets/Images/fog.svg"
    }
    if(code_number == "2100")
    {
      return "assets/Images/fog_light.svg"
    }
    if(code_number == "8000")
    {
      return "assets/Images/tstorm.svg"
    }
    if(code_number == "5001")
    {
      return "assets/Images/flurries.svg"
    }
    if(code_number == "5100")
    {
      return "assets/Images/snow_light.svg"
    }
    if(code_number == "5000")
    {
      return "assets/Images/snow.svg"
    }
    if(code_number == "5101")
    {
      return "assets/Images/snow_heavy.svg"
    }
    if(code_number == "7102")
    {
      return "assets/Images/ice_pellets_light.svg"
    }
    if(code_number == "7000")
    {
      return "assets/Images/ice_pellets.svg"
    }
    if(code_number == "7101")
    {
      return "assets/Images/ice_pellets_heavy.svg"
    }
    if(code_number == "4000")
    {
      return "assets/Images/drizzle.svg"
    }
    if(code_number == "6000")
    {
      return "assets/Images/freezing_drizzle.svg"
    }
    if(code_number == "6200")
    {
      return "assets/Images/freezing_rain_light.svg"
    }
    if(code_number == "6001")
    {
      return "assets/Images/freezing_rain.svg"
    }
    if(code_number == "6201")
    {
      return "assets/Images/freezing_rain_heavy.svg"
    }
    if(code_number == "4200")
    {
      return "assets/Images/rain_light.svg"
    }
    if(code_number == "4001")
    {
      return "assets/Images/rain.svg"
    }
    if(code_number == "4201")
    {
      return "assets/Images/rain_heavy.svg"
    }
  }

  public img_showing03(code_number:any):any
  {
    if(code_number == "1000")
    {
      return "Clear"
    }
    if(code_number == "1100")
    {
      return "Mostly Clear"
    }
    if(code_number == "1101")
    {
      return "Partly Cloudy"
    }
    if(code_number == "1102")
    {
      return "Mostly Cloudy"
    }
    if(code_number == "1001")
    {
      return "Cloudy"
    }
    if(code_number == "2000")
    {
      return "Fog"
    }
    if(code_number == "2100")
    {
      return "Light Fog"
    }
    if(code_number == "8000")
    {
      return "	Thunderstorm"
    }
    if(code_number == "5001")
    {
      return "Flurries"
    }
    if(code_number == "5100")
    {
      return "Light Snow"
    }
    if(code_number == "5000")
    {
      return "Snow"
    }
    if(code_number == "5101")
    {
      return "Heavy Snow"
    }
    if(code_number == "7102")
    {
      return "Light Ice Pellets"
    }
    if(code_number == "7000")
    {
      return "Ice Pellets"
    }
    if(code_number == "7101")
    {
      return "Heavy Ice Pellets"
    }
    if(code_number == "4000")
    {
      return "Drizzle"
    }
    if(code_number == "6000")
    {
      return "Freezing Drizzle"
    }
    if(code_number == "6200")
    {
      return "Light Freezing Rain"
    }
    if(code_number == "6001")
    {
      return "Freezing Rain"
    }
    if(code_number == "6201")
    {
      return "Heavy Freezing Rain"
    }
    if(code_number == "4200")
    {
      return "Light Rain"
    }
    if(code_number == "4001")
    {
      return "Rain"
    }
    if(code_number == "4201")
    {
      return "Heavy Rain"
    }
  }


  // public clickInfo(data:any)
  // {
  //   var tabs:any = document.getElementById("allDetails")
  //   tabs.style.display = "none";
  //   var one:any = document.getElementById("one");
  //   var status:any = document.createElement('tr');
  //   var status_text:any = document.createElement('th');
  //   var status_value:any = document.createElement('th');
  //   status_text.innerHTML = "Status";
  //   status_value.innerHTML = this.img_showing03(data.values.weatherCode);
  //   tabs.appendChild(status_text);
  //   tabs.appendChild(status_value);
  // }

  public generate_details(data:any, index:any)
    {
      var time_details = new Date(data[index].startTime).getDay()
      var td = new Date(data[index].startTime)
      var weekday=new Array(7);
      weekday[0]="Sunday";
      weekday[1]="Monday";
      weekday[2]="Tuesday";
      weekday[3]="Wednesday";
      weekday[4]="Thursday";
      weekday[5]="Friday";
      weekday[6]="Saturday";
      var monthes = new Array(12);
      monthes[0] = "Jan";
      monthes[1] = "Feb";
      monthes[2] = "Mar";
      monthes[3] = "Apr";
      monthes[4] = "May";
      monthes[5] = "Jun";
      monthes[6] = "Jul";
      monthes[7] = "Aug";
      monthes[8] = "Sep";
      monthes[9] = "Oct";
      monthes[10] = "Nov";
      monthes[11] = "Dec";
      var date_detail:any
      if (Number(td.getDate()) < 10)
      {
        date_detail = weekday[time_details] + ", 0" + td.getDate() + " " + monthes[td.getMonth()] + " " + td.getFullYear();
      }
      else {
        date_detail = weekday[time_details] + ", " + td.getDate() + " " + monthes[td.getMonth()] + " " + td.getFullYear();
      }

      var tableContent:any = document.getElementById("myTableBody");
      var overall:any = document.createElement('tr');
      overall.onclick = function()
      {
        oneDay(data[index], date_detail)

      }
      overall.style.cursor = "pointer";
      var nums:any = document.createElement('th');
      nums.setAttribute("scope", "row");
      nums.innerHTML = index + 1
      overall.appendChild(nums);

      var dateNum:any = document.createElement('td');
      dateNum.innerHTML = date_detail;
      overall.appendChild(dateNum);

      var weather_images:any = document.createElement('td');
      var contain_img_text:any = document.createElement('div');
      var code:any = data[index].values.weatherCode;
      var ss:any = this.img_showing02(code);
      var src_image:any = document.createElement('img');
      src_image.src = ss;
      src_image.style.width = "30px";
      contain_img_text.appendChild(src_image);

      var weather_des:any = this.img_showing03(code);
      var text:any = document.createElement('span');
      text.innerHTML = weather_des;
      contain_img_text.appendChild(text);

      weather_images.appendChild(contain_img_text);
      // dateNum.innerHTML = date_detail;
      overall.appendChild(weather_images);

      //heigh temp
      var high_temp:any = document.createElement('td');
      var ht:any = data[index].values.temperatureMax;
      high_temp.innerHTML = ht;
      high_temp.style.margin = "auto";
      overall.appendChild(high_temp);

      //low temp
      var low_temp:any = document.createElement('td');
      var lt:any = data[index].values.temperatureMin;
      low_temp.innerHTML = lt;
      overall.appendChild(low_temp);

      //wind speed
      var wind_s:any = document.createElement('td');
      var ws:any = data[index].values.windSpeed;
      wind_s.innerHTML = ws;
      overall.appendChild(wind_s);

      tableContent.appendChild(overall)

    }



    private preCTime: number = 0;    //ms
    public needDelay(delayTime: number = 0): boolean {
               let nowTime: number = Date.now();
               if (nowTime - this.preCTime< delayTime){
                   return true;
                }
               this.preCTime = nowTime;
               return false;
    }

 

  
  getData()
  {
    var top_right_tag:any = document.getElementById("top-right-tag");
    top_right_tag.style.display = "block";
    var processing:any = document.getElementById("progressbar");
    //console.log("haha")
    //console.log(processing)
    //console.log("getDate: ", this.strInfo, this.cityInfo);
    
    processing.style.display = "block";
    //console.log(processing.style.display)
    var pbar:any = document.getElementById("probar");
    pbar.style.display = "block";
    pbar.style.height = "100px";
    //console.log("this is input city: ", this.inputCity);
    var searchC:any = this.inputCity;
    let checkbox:any = this.autoClick;
    if(checkbox == true)
    {
      searchC = "Los";
    }
    let api = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.cityInfo + '&key=AIzaSyCiknUSvpLnLnwp8JoWDaY8GWWIfUWhx60';
    console.log(api);
    this.http.get(api).subscribe((response:any) => {
      // console.log(response.status);
      //console.log(response.results[0]["geometry"]["location"]);
      var lat:any = response.results[0]["geometry"]["location"]["lat"];
      var lng:any = response.results[0]["geometry"]["location"]["lng"];
      //console.log(lat, lng);
      var field:any = "fields=precipitationIntensity,precipitationType,windSpeed,windGust,windDirection,temperatureMax,temperatureMin,temperatureApparent,cloudCover,cloudBase,cloudCeiling,weatherCode,temperature,humidity,pressureSurfaceLevel,visibility,cloudCover,uvIndex,precipitationProbability,sunriseTime,sunsetTime"
      let weatherApi:any = "http://localhost:3000/whetherInfo?" + "location_lat=" + lat + "&" + "location_lng=" + lng + "&" + field;
      console.log(weatherApi);
      
      //console.log(weatherApi);
      this.http.get(weatherApi).subscribe((responses:any) => {    
        var respCode:any = responses.code
        console.log(respCode) // undefin
        var warnDOM:any = document.getElementById("warning")
        if (respCode >= 400000) {
          warnDOM.style.display = "block"
          processing.style.display = "none";
          top_right_tag.style.display = "none";
          return
        }
        warnDOM.style.display = "none"
        var dynmatic_title:any = document.getElementById("dynmatic_title")
        var forecast_title_content:any = "Forecast at " + this.strInfo + ", " + this.cityInfo
        dynmatic_title.innerHTML = forecast_title_content
        
        //console.log(responses, "code????");
        var day_data:any = responses.data.timelines[0].intervals;
        var more_data:any = responses.data.timelines[0];
        var t:any = document.getElementById("topTag");
        t.style.display = "block";
        var t2:any = document.getElementById("myTabContent");
        t2.style.display = "block";

        processing.style.display = "none";
        console.log("data information: ", day_data);
        
        for (var i=0;i<14;i++) {
          this.generate_details(day_data, i);
        }
        
        first_chart(more_data, lat,lng);
      },
      (error:any) => {
        console.log('oops', error)
      })
    })
  }
}
