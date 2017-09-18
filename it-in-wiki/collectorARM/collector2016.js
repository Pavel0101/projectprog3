var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var data0 = "16tviny.json";
var data1 = "16tvinygenres.json";
var url = "http://www.imdb.com/search/title?country_of_origin=am&release_date=2016";
var zang = [];
var zang1 =[];
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("h3 > a").each(function() {
            var data = $(this);
           zang.push(data.text());
           fs.writeFile(data0,JSON.stringify(zang));  
      });
        $(".genre").each(function() {
            var data = $(this);
           zang1.push(data.text());
           fs.writeFile(data1,JSON.stringify(zang1));  
      });
    }
});


 