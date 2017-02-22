require('./app.scss');

var $ = require('jquery');
var str = require('./constant');

var App = function() {
    // console.log(str);
    $('#test').html(str + '_index_');
};

var app = new App();
app.get = function() {};
