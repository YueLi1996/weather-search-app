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
    