const request = require('request');

let apiKey = '4176b01f3b069bf25ca0ad38079389b6';
let city = 'lusaka';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

let weather = JSON.parse(body)

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
