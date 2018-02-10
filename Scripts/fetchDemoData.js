$(document).ready(function(){
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
      consol.log(input);
      console.log(data);
      alert("successfully userinput");
    },
  });
    
});