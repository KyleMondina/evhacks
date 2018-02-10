$(document).ready(function(){

    var token = "7X57HEIaLekNE56gk-9p3vAJBBk6oFLb6saVp4xUgmuHBRFargCA2aoHCwn29lfHC34o3pJz2h489-8yhjZXNTGXhyNsx0iYFpAXdQIFhOtfz-nAje6JANBEUPg3I1kTKqTmTnIXOS5DAzZnzbgceA..";
    const testlat = 33.81091;
    const testlong = -118.09047;

    const sanjose = [37.338208,-121.886329];
    var demoData;


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
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=7X57HEIaLekNE56gk-9p3vAJBBk6oFLb6saVp4xUgmuHBRFargCA2aoHCwn29lfHC34o3pJz2h489-8yhjZXNTGXhyNsx0iYFpAXdQIFhOtfz-nAje6JANBEUPg3I1kTKqTmTnIXOS5DAzZnzbgceA..&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[%0A%20%20{%0A%20%20%20%20%22geometry%22:{%0A%20%20%20%20%20%20%22x%22:-118.09047,%0A%20%20%20%20%20%20%22y%22:33.81091%0A%20%20%20%20}%0A%20%20}%0A]&studyAreasOptions={%0A%20%20%22areaType%22:%22RingBuffer%22,%0A%20%20%22bufferUnits%22:%22esriMiles%22,%0A%20%20%22bufferRadii%22:[1]%0A}&dataCollections=[%22KeyGlobalFacts%22,%20%22KeyUSFacts%22]`,
    "method": "POST",
    "headers": {
      //"Cache-Control": "no-cache",
      //"Postman-Token": "4a368af8-c3b2-cf9e-36d6-3ce5ef57354c"
    }
  }

  $.ajax(settings).done(function (response) {
    demoData = JSON.parse(response)
    console.log(demoData);
  });
  })

});
