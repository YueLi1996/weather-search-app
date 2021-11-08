import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  public handleInput(){
    // console.log(this.street_and_city.inputStreet); // street
    // console.log(this.street_and_city.inputCity); // city
    // console.log(this.select_city.inputState); // state
    // console.log(this.auto_detect.autoClick);
    let checkbox = this.autoClick;
    let streetDOM = this.inputStreet;
    let cityDOM = this.inputCity;
    let stateDOM = this.select_city.inputState;
    if(checkbox == true)
    {
      console.log(this.select_city.statedisable);
      
      if(streetDOM != "" || cityDOM != "") {
        this.inputStreet = ""
        this.inputCity = ""
    }
        this.citydisable = "true"
        this.streetdisable = "true"
        this.select_city.statedisable = "true"
        this.select_city.inputState = "Select your state"
        // stateDOM.disabled = "true"
    }
    else {
      streetDOM = ""
      cityDOM = ""
      this.citydisable = "false"
      this.streetdisable = "false"
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
    let streetDOM = this.inputStreet;
    let cityDOM = this.inputCity;
    let stateDOM = this.select_city.inputState;
    let searchbtnDOM = this.searchbtnDOM
    //handle submit button
    if (streetDOM == "" || cityDOM == "" || stateDOM == "Select your state") {
      this.searchbtnDOM = true
    }
    else {
      console.log("searchbtnDOM:", searchbtnDOM);
      this.searchbtnDOM = false
    }
    
  }
  onClickFucntion()
  {
    if (this.autoClick == false)
    {
      console.log("this is false");
      this.autoClick = true;
    }
    else
    {
      this.autoClick = false;
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
      // var temp_ele = document.createElement('div');
      // temp_ele.setAttribute("class", "detail-container");
      // temp_ele.setAttribute("onclick", function q(){console.log("index: ", index);})
      // temp_ele.setAttribute("id", index);
      // temp_ele.onclick = function()
      // {
      //   show_weather_details(data, index, date_detail);
      // }
      var tableContent:any = document.getElementById("myTableBody");
      var overall:any = document.createElement('tr');
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



      // var date_var = document.createElement('div');
      // date_var.setAttribute("class", "detail-info dates");
      // date_var.innerHTML = date_detail;
      // temp_ele.appendChild(date_var)

      // var imgs = document.createElement('div');
      // imgs.setAttribute("class", "detail-info status-info");
      // var code = data[index].values.weatherCode;
      // // var ss = img_showing02(code)
      // var src_image = document.createElement('img');
      // // src_image.src = ss;
      // var par = document.createElement('p');
      // // par.innerHTML = img_showing03(code);
      // imgs.appendChild(src_image)
      // imgs.appendChild(par)
      // temp_ele.appendChild(imgs)
      // //high temp
      // var high_temp = document.createElement('div');
      // high_temp.setAttribute("class", "detail-info high-temp");
      // var ht = data[index].values.temperatureMax;
      // high_temp.innerHTML = ht;
      // temp_ele.appendChild(high_temp);

      // //low_temp
      // var low_temp = document.createElement('div');
      // low_temp.setAttribute("class", "detail-info low-temp");
      // var lt = data[index].values.temperatureMin;
      // low_temp.innerHTML = lt;
      // temp_ele.appendChild(low_temp);

      // //wind Speed
      // var wind_s = document.createElement('div');
      // wind_s.setAttribute("class", "detail-info wind-speed");
      // var ws = data[index].values.windSpeed;
      // wind_s.innerHTML = ws;
      // temp_ele.appendChild(wind_s);

      // table_container.appendChild(temp_ele);
      // var body = document.getElementsByTagName("body")[0];
      // body.appendChild(table_container);

      // // temp_ele.style.cursor="hand";

      // console.log(date_detail);

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
    var processing:any = document.getElementById("progressbar");
    var pronum:any = 0;
    processing.style.display = "block";
    var pbar:any = document.getElementById("probar");
    pbar.style.display = "block";
    pbar.style.height = "100px";
    // setInterval(function(){
    //   console.log(pronum);
      
    //   pronum += 25;
    //   var temp:any = pronum + "%";
    //   processing.style.width = temp
    //   processing.setAttribute('aria-valuenow', pronum)
    // }, 500);
    let api = 'https://maps.googleapis.com/maps/api/geocode/json?address=Los&key=AIzaSyCiknUSvpLnLnwp8JoWDaY8GWWIfUWhx60';
    this.http.get(api).subscribe((response:any) => {
      // console.log(response.status);
      console.log(response.results[0]["geometry"]["location"]);
      var lat:any = response.results[0]["geometry"]["location"]["lat"];
      var lng:any = response.results[0]["geometry"]["location"]["lng"];
      var field:any = "fields=precipitationIntensity,precipitationType,windSpeed,windGust,windDirection,temperatureMax,temperatureMin,temperatureApparent,cloudCover,cloudBase,cloudCeiling,weatherCode,temperature,humidity,pressureSurfaceLevel,visibility,cloudCover,uvIndex,precipitationProbability"
      let weatherApi:any = "http://localhost:3000/whetherInfo?" + "location_lat=" + lat + "&" + "location_lng=" + lng + "&" + field;
      console.log(weatherApi);
      this.http.get(weatherApi).subscribe((responses:any) => {      
        console.log(responses.data.timelines[0].intervals);
        var day_data:any = responses.data.timelines[0].intervals;
        var t:any = document.getElementById("topTag");
        t.style.display = "block";
        var t2:any = document.getElementById("myTabContent");
        t2.style.display = "block";
        var fav:any = document.getElementById("btnform");
        fav.style.display = "none";
        // processing.style.display = "none";
        for (var i=0;i<14;i++){
          this.generate_details(day_data, i);
        }
      })
    }
    )
  }
}
