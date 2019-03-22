const express = require('express');
const app = express();
const port = 3000;
const request = require('request');
app.set("view engine", "ejs");
const url     = "https://wx.wearebraid.com/stations/"
      secret  = {'Authorization': "3ded1a32715f7eb8423918ff982950b4"}
      
app.use(express.static(__dirname + "/public"));


function fixParseJSON (body) {
  return JSON.parse(body.replace(/-/g, ""))
}


app.get('/', function (req, res){
  var stationArray = [];
  request(url + 'kcho', secret, function (error, response, body) {
      stationArray.push(fixParseJSON(body));
      
      request(url + 'kvbw', secret, function (error, response, body) {
        stationArray.push(fixParseJSON(body));
          
          request(url + 'kshd', secret, function (error, response, body) {
            stationArray.push(fixParseJSON(body));
              
              request(url + 'kgve', secret, function (error, response, body) {
                stationArray.push(fixParseJSON(body));
                  
                  request(url + 'kiad', secret, function (error, response, body) {
                    stationArray.push(fixParseJSON(body));
                    res.render("index", {stationArray: stationArray});
                })
              })
            
          })
        
      })
    
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

