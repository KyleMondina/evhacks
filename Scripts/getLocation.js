/*global $*/
$(document).ready(function(){
    var userData = {
        userLat : "",
        userLong : ""
    };

    $('form').on('submit', function(){

        userData.userLat = $("input[id='lat']").val();
        userData.userLong = $("input[id='long']").val();
        alert('hi');
        alert(userData.userLat);
        alert(userData.userLong);

         $.ajax({
          type: 'POST',
          url: '/',
          data: userData,
          success: function(data){
              console.log(data);
            alert(data);
            alert("connection successful");
            window.location.replace("demographicDisplay");
          },
        });



    });
});
