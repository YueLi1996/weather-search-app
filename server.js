var express = require('express');
var app = express();
var port = process.env.PORT ||3000;
var https= require("https");
var url= require("url");
var request = require("request");

// app.get('/location_cur', function (req, res) {
//     res.setHeader("Content-Type","text/plain");
//     res.setHeader("Access-Control-Allow-Origin","*");
//     var params = url.parse(req.url, true).query;
//     var url_text='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
//         +params.location_lat+','+params.location_lng+'&radius='+params.Distance+'&type='+params.Category+'&keyword='
//         +params.Keyword+'&key=AIzaSyCaVHSWA2FTNKYLOecEY05UcAz9yo1krzA';
//     https.get(url_text,function(req2,res2){
//         var res_text = "";
//         req2.on('data',function(data){
//             res_text+=data;
//         });
//         req2.on('end',function(){
//             return res.send(res_text);
//         });

//     });
//     console.log("location_cur GET");
//     // res.send('Hello GET');
// })

app.get('/geoInfo',function(req, res){
    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    var params = url.parse(req.url, true).query;
    var options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ params.city + '&key=AIzaSyCiknUSvpLnLnwp8JoWDaY8GWWIfUWhx60',
    };
    request(options, function (error, response, body) {
        res.send(body);
    });

})

app.get('/whetherInfo',function(req, res){
    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    var params = url.parse(req.url, true).query;
    // console.log("hello");
    var options = {
        method: 'GET',
        url: 'https://api.tomorrow.io/v4/timelines?location='+ params.location_lat + ',' +
        params.location_lng + '&fields=' + params.fields + '&timesteps=1d&units=imperial&timezone=America/Los_Angeles&apikey=C5JMDFsiGmycb43l7QsGc2nV15uiENPi',
    };
    request(options, function (error, response, body) {
        console.log(options.url);
        // console.log(body);
        res.send(body);
    });

})

app.get('/whetherInfo/hours',function(req, res){
    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    var params = url.parse(req.url, true).query;
    
    var options = {
        method: 'GET',
        url: 'https://api.tomorrow.io/v4/timelines?location='+ params.location_lat + ',' +
        params.location_lng + '&fields=' + params.fields + '&timesteps=1h&units=imperial&timezone=America/Los_Angeles&apikey=C5JMDFsiGmycb43l7QsGc2nV15uiENPi',
    };
    request(options, function (error, response, body) {
        console.log(options.url);
        // console.log(body);
        res.send(body);
    });

})

var server = app.listen(port, function () {
    console.log("Example app listening at http://localhost:3000")
})