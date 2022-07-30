$(document).ready(function(){
  
  $("h1").on('click', function() {
//    $(":root").css({"--bg-color": "yellow", "--color": "black"});
   console.log($(":root").css("--bg-color"));
   console.log($("h1").css("color"));
    // document.documentElement.style.setProperty("--bg-color", "yellow");
    // document.documentElement.style.setProperty("--y", e.clientY + "px");
  });
  
});