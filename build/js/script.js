$(document).ready(function () {
  $("#btn_bio").click(function () { 
    $("#bio").fadeIn("fast", function () { }); });
  $("#btn_bio").click(function () { 
    $("#education").hide(); });
  $("#btn_education").click(function () { 
    $("#education").fadeIn("fast", function () { }); });
  $("#btn_education").click(function () { 
    $("#bio").hide(); });  

  $(".BTN_CLOSE").click(function () {
    $(this).closest(".window").fadeOut("fast", function () { });
  });
});


