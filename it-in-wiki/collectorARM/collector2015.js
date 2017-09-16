var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var data0 = "15tvviny.json";
var url = "http://www.imdb.com/search/title?country_of_origin=am&release_date=2015";
var zang = [];

request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("h3 > a").each(function() {
            var data = $(this);
           zang.push(data.text());
           fs.writeFile(data0,JSON.stringify(zang));  
      });
    }
});


