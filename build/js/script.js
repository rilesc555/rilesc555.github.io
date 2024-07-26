$(document).ready(function () {
  $("#btn_bio").click(function () { 
    $("#bio").fadeIn("fast", function () { }); 
    $("#education").hide(); 
    $("#contact").hide(); });

  $("#btn_education").click(function () { 
    $("#education").fadeIn("fast", function () { }); 
    $("#bio").hide();
    $("#contact").hide(); });
  //this function uses button to link to resume pdf
    $("#btn_resume").click(function () {
      window.location.assign("./resume.pdf");
    })
  //this function shows contact info
  $("#btn_contact").click(function () {
    $("#contact").fadeIn("fast", function () { });
    $("#bio").hide();
    $("#education").hide();
  })
  //this function hides everything except contact info
  $("#btn_home").click(function() {
    $("#bio").fadeIn("fast", function () {});  
    $("#education").hide();
    $("#contact").hide(); })
  $(".BTN_CLOSE").click(function () {
    $(this).closest(".window").fadeOut("fast", function () { });
  });
});


