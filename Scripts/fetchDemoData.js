$(document).ready(function(){

    var token = "YgtJx62sU2ibMK6JLEDpoQaQM4BvVVAYphfzFXllQ_N0KadUprT_Ct7b-IfCI1YiV6zgIfzzwv1lqADOvnkMOZojBh96-dZUxWd3lenN8ieVuAiDBvfwPAdQjcWTDag1F1wC9Avww3EfkTxgZ-Bcvg..";
    const testlat = 33.81091;
    const testlong = -118.09047;


    alert('hi');
    var input = {
        lat:"",
        long:""
    }

    $.ajax({
    type: 'GET',
    url: '/index.js',
    success: function(data){
      input.lat = data.userLat;
      input.long = data.userLong;
      console.log(input);
      console.log(data);
      alert("successfully userinput");
    },
  }).then(function(){
    var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${token}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[%0A%20%20{%0A%20%20%20%20%22geometry%22:{%0A%20%20%20%20%20%20%22x%22:${input.long},%0A%20%20%20%20%20%20%22y%22:${input.lat}%0A%20%20%20%20}%0A%20%20}%0A]&studyAreasOptions={%0A%20%20%22areaType%22:%22RingBuffer%22,%0A%20%20%22bufferUnits%22:%22esriMiles%22,%0A%20%20%22bufferRadii%22:[1]%0A}&dataCollections=[%22KeyGlobalFacts%22,%20%22KeyUSFacts%22]`,
  "method": "POST",
  "headers": {
    //"Cache-Control": "cache",
    //"Postman-Token": "246da9d1-3e62-84a6-5782-96efcc0e40fd"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
  })

});
