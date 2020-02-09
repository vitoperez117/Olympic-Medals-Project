// Create a map object
{/* <script > var data = {{ data | tojson }} </script> */}

// var data = {{ data | tojson }};
// Loop through the cities array and create one marker for each city object

  // var summer = response;
  // // var winter = response[1];

var summerCircles = [];
var winterCircles = [];

async function readFileSync(){
  let summer = await d3.csv("summer_olympic_medals.csv");
  let winter = await d3.csv("winter_olympic_medals.csv");

  return {summerData: summer, winterData: winter}
}

var data = readFileSync();

data.then(d => { d.summerData.map(a => {
  var color = "";
  
  if (a.Total > 1000) {
    color = "blue";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 140
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>")
    );
    
  }
  else if (a.Total > 800) {
    color = "purple";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 170
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>")
    )
  
  }
  else if (a.Total > 500) {
    color = "green";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 190
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
    )
  
  }
  else if (a.Total > 200) {
    color = "yellow";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 300
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
    )
  
  }
  else if (a.Total > 100) {
    color = "red";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "red",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 600
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
    )
  
  }
  else {
    color = "orange";
    summerCircles.push(
      L.circle([a.lat, a.long], {
        fillOpacity: 0.75,
        color: "red",
        fillColor: color,
        // Adjust radius
        radius: a.Total * 600
      }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
    )
  }
});
  d.winterData.map(a => {
    var color = "";
    
    if (a.Total > 1000) {
      color = "blue";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "white",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 140
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      );
      
    }
    else if (a.Total > 800) {
      color = "purple";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "white",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 170
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      )
    
    }
    else if (a.Total > 500) {
      color = "green";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "white",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 190
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      )
    
    }
    else if (a.Total > 200) {
      color = "yellow";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "white",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 300
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      )
    
    }
    else if (a.Total > 100) {
      color = "red";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "red",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 600
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      )
    
    }
    else {
      color = "orange";
      winterCircles.push(
        L.circle([a.lat, a.long], {
          fillOpacity: 0.75,
          color: "red",
          fillColor: color,
          // Adjust radius
          radius: a.Total * 600
        }).bindPopup("<h1>" + a.country_name + "</h1> <hr> <h3>Medals: " + a.Total + "</h3> <hr> <h4>Gold: " + a.Gold + "</h4> <hr> <h4>Silver: " + a.Silver + "</h4> <hr> <h4>Bronze: " + a.Bronze + "</h4>" )
      )
    }
  })}).then(doRest);



function doRest() {
  var winterMedals = L.layerGroup(winterCircles);
  var summerMedals = L.layerGroup(summerCircles);

  var worldmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
  })


  var baseMaps = {
    "World Map": worldmap
  };

  var overlayMaps = {
    "Summer Olympics": summerMedals,
    "Winter Medals": winterMedals
  };

  var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3,
    layers: [worldmap, summerMedals, winterMedals]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}
