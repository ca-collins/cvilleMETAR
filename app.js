const express = require('express'),
      app     = express(),
      port = process.env.PORT || 3000,
      request = require('request'),
      url     = "https://wx.wearebraid.com/stations/",
      secret  = {'Authorization': "3ded1a32715f7eb8423918ff982950b4"};
      
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Removes hyphens then parses
function fixParseJSON (body) {
  return JSON.parse(body.replace(/-/g, ""))
}

//The route of repeating requests! I'm sure there is a better way to do this.
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

