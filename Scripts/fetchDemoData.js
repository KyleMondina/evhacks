$(document).ready(function(){

    var token = "tkJPdjkFtqdlprW9wX_uPH467_tAz9-YTuwBMaoRrTim2QcxZSize5z8wz0kD5pWzLpUjRkfeVaFfSjPD0jG8Iu__fyg2DpVGQQZ85UKJm-9QFIVk8QVhTkDbJjkWLf1_EpMzf3GK3BQ_pfKaMRoyw..";
    const testlat = -118.09047;
    const testlong = 33.81091;

    const sanjose = [37.338208,-121.886329];
    var demoData;

    var totalPop;
    var totalHouseHolds;
    var avgHomeVal;
    var popGrowthYear2017_2022;
    var houseGrowthYear2017_2022;


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
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${token}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[%0A%20%20{%0A%20%20%20%20%22geometry%22:{%0A%20%20%20%20%20%20%22x%22:${testlat},%0A%20%20%20%20%20%20%22y%22:${testlong}%0A%20%20%20%20}%0A%20%20}%0A]&studyAreasOptions={%0A%20%20%22areaType%22:%22RingBuffer%22,%0A%20%20%22bufferUnits%22:%22esriMiles%22,%0A%20%20%22bufferRadii%22:[1]%0A}&dataCollections=[%22KeyGlobalFacts%22,%20%22KeyUSFacts%22]`,
    "method": "POST",
    "headers": {
      //"Cache-Control": "no-cache",
      //"Postman-Token": "2fa5c575-4c02-8aa9-deab-e6364d9557ea"
    }
    }

    $.ajax(settings).done(function (response) {
    demoData = JSON.parse(response);
    console.log(demoData);
    });
  });

});
