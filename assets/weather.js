

var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2c479dfacc57a44301b67fd8100ab6c6';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});


(function () {
    var old = console.log;
    var logger = document. getElementById('log');
    console.log = function (message) {
    if (typeof message == 'object') {
    logger. innerHTML += (JSON && JSON. stringify ? JSON.
     } else {
    logger. innerHTML += message +
    '';