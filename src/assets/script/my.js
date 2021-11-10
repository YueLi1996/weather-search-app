function ajax(options){

    if(window.XMLHttpRequest){
      var xhr = new XMLHttpRequest
    }else{
      var xhr = new ActiveXObject()
    }

    options = options ||{}
    options.type = (options.type ||'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    var params = options.data

    if(options.type == 'GET'){
      xhr.open('GET',options.url,true)
      xhr.send(null)
    }
    // else if(options.type == 'POST'){
    //   xhr.open('POST',options.url,true)
    //   xhr.send(params)
    //   // xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")//规定输出为键值对的形式
    // }


    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        var status = xhr.status
        if (status >= 200 && status < 300){
          options.success && options.success(xhr.responseText,xhr.responseXML)
        }else{
          options.fail &&options.fail(status)
        }
      }
    }
  }

function weather_hours(data, lat, lng)
{
    field = "fields=precipitationIntensity,precipitationType,windSpeed,windGust,windDirection,temperatureMax,temperatureMin,temperatureApparent,cloudCover,cloudBase,cloudCeiling,weatherCode,temperature,humidity,pressureSurfaceLevel,visibility,cloudCover,uvIndex,precipitationProbability"
  ajax({
    type: 'get',
    dataType: 'json',
    data: {},
    url: "http://localhost:3000/whetherInfo/hours?" + "location_lat=" + lat + "&" + "location_lng=" + lng + "&" + field,
    success: function(text,xml){
      var weather_info = JSON.parse(text)
      console.log(weather_info);
      var hours_data = weather_info.data.timelines[0].intervals;
      console.log(hours_data);
      var temperatures = hours_data.map(function(e) {
        var time = new Date(e.startTime).getTime();
        var value = e.values.temperature;
        return { x: time, y: value };
      });
      console.log(temperatures);
      var humi = hours_data.map(function(e) {
          var time = new Date(e.startTime).getTime();
          var value = Math.round(e.values.humidity);
          return { x: time, y: value };
        });
      console.log(humi);
      var sufacepressure = hours_data.map(function(e) {
        var time = new Date(e.startTime).getTime();
        var value = e.values.pressureSurfaceLevel;
        return { x: time, y: value };
      });
      console.log("pressures: ", sufacepressure);
      var windSpeeds = hours_data.map(function(e) {
        var time = new Date(e.startTime).getTime();
        var value = e.values.windSpeed;
        var direction = e.values.windDirection;
        return { x: time, value, direction };
      });

      Highcharts.chart('weather-hours', {
        chart: {
          plotBorderWidth: 1,
          alignTicks: false,
          scrollablePlotArea: {
            minWidth: 600,
          }
        },
        title: {
          text: 'Hourly Weather (For Next 5 Days)'
        },
        xAxis: [{
          type: 'datetime',
          tickInterval: 14400000,
          minorTickInterval: 3600000,
          tickLength: 6,
          tickPosition: 'inside',
          gridLineWidth: 1,
          gridLineColor: 'rgba(128, 128, 128, 0.2)',
          startOnTick: false,
          endOnTick: false,
          minPadding: 0,
          maxPadding: 0,
          offset: 30,
          showLastLabel: true,
          labels: {
            format: '{value:%H}'
          },
          crosshair: true,
        }, {
          linkedTo: 0,
          type: 'datetime',
          tickInterval: 86400000,
          labels: {
            format: '{value:<span style="font-size: 13px; font-weight: bold">%a</span> %b %e}',
            align: 'left',
            x: 4,
            y: -5
          },
          opposite: true,
          tickLength: 22,
          gridLineWidth: 1
        }],
        yAxis: [{
          title: {
            text: null,
          },
          labels: {
            format: '{value}°F',
            style: {
              fontSize: '9px',
            },
            x: -5,
          },
          plotLines: [{
            value: 0,
            color: '#BBBBBB',
            width: 2,
            zIndex: 2,
          }],
          maxPadding: 0.3,
          minRange: 8,
          tickInterval: 1,
          gridLineColor: 'rgba(128, 128, 128, 0.2)',
        }, {
          title: {
            text: null,
          },
          labels: {
            enabled: false,
          },
          gridLineWidth: 0,
          tickLength: 0,
          minRange: 10,
          min: 0,
        }, {
          allowDecimals: false,
          title: {
            text: 'inHg',
            offset: 0,
            align: 'high',
            rotation: 0,
            style: {
              fontSize: '10px',
              color: 'rgb(254,177,56)',
            },
            textAlign: 'left',
            x: 3
          },
          labels: {
            style: {
              fontSize: '8px',
              color: 'rgb(254,177,56)',
            },
            y: 2,
            x: 3,
          },
          gridLineWidth: 0,
          opposite: true,
          showLastLabel: false
        }],
        tooltip: {
          crosshairs: true,
          shared: true,
          useHTML: true,
          headerFormat: '<small>{point.x:%A, %b %e, %H:%M}</small><br>',
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            pointPlacement: 'between',
          },
        },
        series: [{
          name: 'Temperature',
          data: temperatures,
          type: 'spline',
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
          tooltip: {
            valueSuffix: ' °F',
          },
          zIndex: 1,
          color: 'rgb(255,51,51)',
          negativeColor: 'rgb(72,175,232)'
        }, {
          name: 'Humidity',
          data: humi,
          type: 'column',
          color: 'rgb(134,206,255)',
          yAxis: 1,
          groupPadding: 0,
          pointPadding: 0,
          tooltip: {
            valueSuffix: ' %',
          },
          grouping: false,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '8px',
              color: 'gray'
            },
          },
        },
        {
          name: 'Air pressure',
          color: 'rgb(254,177,56)',
          data: sufacepressure,
          marker: {
            enabled: false
          },
          shadow: false,
          tooltip: {
            valueSuffix: ' inHg'
          },
          dashStyle: 'shortdot',
          yAxis: 2
        },
        { // wind speed
          name: 'Wind',
          type: 'windbarb',
          id: 'windbarbs',
          color: 'rgb(0,0,0)',
          data: windSpeeds,
          lineWidth: 2,
          vectorLength: 6,
          yOffset: -15,
          tooltip: {
            valueSuffix: ' mph'
          }
        }],
      });
    },
    fail: function(status){
      console.log(status)
    }
  })

}

function first_chart(data, lat, lng)
    {
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
      var leng = data.intervals.length;
      var satrt_m = new Date(data.startTime).getMonth();
      var satrt_d = new Date(data.startTime).getDate();
      var satrt_y = new Date(data.startTime).getFullYear();
      var end_m = new Date(data.endTime).getMonth();
      var end_d = new Date(data.endTime).getDate();
      var end_y = new Date(data.endTime).getFullYear();
      var ranges =  "Range: " + satrt_d + " " + monthes[satrt_m] + " to " + end_d + " " + monthes[end_m];
      console.log(ranges);
      var arr = new Array(Number(leng));
      for (var i =0;i < leng;i++)
      {
        arr[i] = new Array(3);
        arr[i][0] = new Date(data.intervals[i].startTime).getTime();
        arr[i][1] = data.intervals[i].values.temperatureMin;
        arr[i][2] = data.intervals[i].values.temperatureMax;
      }
      console.log(arr);

      // Highcharts.getJSON(
      // JSON.stringify( arr ),
      // function (data) {
        Highcharts.chart('container', {

            chart: {
                type: 'arearange',
                zoomType: 'x',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            plotOptions: {
                series: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, 'rgb(247, 171, 52)'],
                            [1, 'rgb(221, 235, 248)']
                        ]
                    }
                }
            },
            title: {
                text: 'Temperature Ranges (Min, Max)'
            },

            xAxis: {
                type: 'datetime',
                accessibility: {
                    rangeDescription: ranges
                }
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°F',
                xDateFormat: '%A, %b %e'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: arr
            }]

        });
        weather_hours(data, lat, lng);
    }
    
    function img_showing03(code_number)
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
    
    function oneDay(data, date_detail)
    {
      var tabs = document.getElementById("allDetails");
      tabs.style.display = "none";
      var one = document.getElementById("one");
      //status
      var status = document.createElement('tr');
      status.style.backgroundColor = "rgb(242,242,242)"
      var status_text = document.createElement('th');
      var status_value = document.createElement('th');
      status_text.innerHTML = "Status";
      status_value.innerHTML = this.img_showing03(data.values.weatherCode);
      status.appendChild(status_text);
      status.appendChild(status_value);
      one.appendChild(status);

      //Max temp
      var max_temp = document.createElement('tr');
      max_temp.style.backgroundColor = "rgb(255,255,255)"
      var max_temp_text = document.createElement('th');
      var max_temp_value = document.createElement('th');
      max_temp_text.innerHTML = "Max Temperature";
      max_temp_value.innerHTML = data.values.temperatureMax + "&deg";
      max_temp.appendChild(max_temp_text);
      max_temp.appendChild(max_temp_value);
      one.appendChild(max_temp);

      //Min temp
      var min_temp = document.createElement('tr');
      min_temp.style.backgroundColor = "rgb(242,242,242)"
      var min_temp_text = document.createElement('th');
      var min_temp_value = document.createElement('th');
      min_temp_text.innerHTML = "Min Temperature";
      min_temp_value.innerHTML = data.values.temperatureMin + "&deg";
      min_temp.appendChild(min_temp_text);
      min_temp.appendChild(min_temp_value);
      one.appendChild(min_temp);

      //apparent temperature
      var appar = document.createElement('tr');
      appar.style.backgroundColor = "rgb(255,255,255)"
      var appar_text = document.createElement('th');
      var appar_value = document.createElement('th');
      appar_text.innerHTML = "Apparent Temperature";
      appar_value.innerHTML = data.values.temperatureApparent + "&deg";
      appar.appendChild(appar_text);
      appar.appendChild(appar_value);
      one.appendChild(appar);

      //sun rise time
      var rise = document.createElement('tr');
      rise.style.backgroundColor = "rgb(242,242,242)"
      var rise_text = document.createElement('th');
      var rise_value = document.createElement('th');
      rise_text.innerHTML = "Sun Rise Time";
      var sunrise = data.values.sunriseTime;
      var arr1 = sunrise.split("-");
      var st1= arr1[0] + '-' + arr1[1] + '-' + arr1[2];
      var tim01 = new Date(st1).getHours()
      rise_value.innerHTML = tim01;
      rise.appendChild(rise_text);
      rise.appendChild(rise_value);
      one.appendChild(rise);

      //sun set time
      var sunS = document.createElement('tr');
      sunS.style.backgroundColor = "rgb(255,255,255)"
      var sunS_text = document.createElement('th');
      var sunS_value = document.createElement('th');
      sunS_text.innerHTML = "Sun Set Time";
      var sunset = data.values.sunsetTime;
      var arr2 = sunset.split("-");
      var st2= arr2[0] + '-' + arr2[1] + '-' + arr2[2];
      var tim02 = new Date(st2).getHours()
      sunS_value.innerHTML = tim02;
      sunS.appendChild( sunS_text);
      sunS.appendChild(sunS_value);
      one.appendChild(sunS);

      //humidity
      var hu = document.createElement('tr');
      hu.style.backgroundColor = "rgb(242,242,242)"
      var hu_text = document.createElement('th');
      var hu_value = document.createElement('th');
      hu_text.innerHTML = "Humidity";
      hu_value.innerHTML = data.values.humidity + "%";
      hu.appendChild(hu_text);
      hu.appendChild(hu_value);
      one.appendChild(hu);

      //wind speed
      var wind = document.createElement('tr');
      wind.style.backgroundColor = "rgb(255,255,255)"
      var wind_text = document.createElement('th');
      var wind_value = document.createElement('th');
      wind_text.innerHTML = "Wind Speed";
      wind_value.innerHTML = data.values.windSpeed + "mph";
      wind.appendChild(wind_text);
      wind.appendChild(wind_value);
      one.appendChild(wind);

      //vis
      var visi = document.createElement('tr');
      visi.style.backgroundColor = "rgb(242,242,242)"
      var visi_text = document.createElement('th');
      var visi_value = document.createElement('th');
      visi_text.innerHTML = "Visibility";
      visi_value.innerHTML = data.values.visibility + "mi";
      visi.appendChild(visi_text);
      visi.appendChild(visi_value);
      one.appendChild(visi);

      //cloud cover
      var ccover = document.createElement('tr');
      ccover.style.backgroundColor = "rgb(255,255,255)"
      var ccover_text = document.createElement('th');
      var ccover_value = document.createElement('th');
      ccover_text.innerHTML = "Cloud Cover";
      ccover_value.innerHTML = data.values.cloudCover + "%";
      ccover.appendChild(ccover_text);
      ccover.appendChild(ccover_value);
      one.appendChild(ccover);

      var titles= document.getElementById("dateTitles");
      titles.innerHTML = date_detail;
    }