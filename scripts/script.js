$( document ).ready(function() {
    //click on an image, get a message
    $("#dogeOne").click(function() {
      console.log("user clicked dogeOne");
      $("#outputDiv").toggle();
      $("#outputMsg").text("Yu gayn wayt, not WOW");
    });
});