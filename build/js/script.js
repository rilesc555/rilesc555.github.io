$(document).ready(function () {
  $("#btn_bio").click(function () { 
    $("#bio").fadeIn("fast", function () { }); 
    $("#education").hide(); 
    $("#contact").hide(); 
    $("#skills").hide(); 
    $("#projects").hide(); });

  $("#btn_education").click(function () { 
    $("#education").fadeIn("fast", function () { }); 
    $("#bio").hide();
    $("#contact").hide(); 
    $("#skills").hide(); 
    $("#projects").hide(); });

  $("#btn_resume").click(function () {
      window.location.assign("./resume.pdf");
    })

  $("#btn_contact").click(function () {
    $("#contact").fadeIn("fast", function () { });
    $("#bio").hide();
    $("#education").hide();
    $("#skills").hide(); 
    $("#projects").hide(); })

  $("#btn_home").click(function() {
    $("#bio").fadeIn("fast", function () {});  
    $("#education").hide();
    $("#contact").hide(); 
    $("#skills").hide(); 
    $("#projects").hide(); })

  $("#btn_skills").click(function() {
    $("#skills").fadeIn("fast", function () {});  
    $("#education").hide();
    $("#contact").hide(); 
    $("#bio").hide(); 
    $("#projects").hide(); })

  $("#btn_projects").click(function() {
    $("#projects").fadeIn("fast", function () {});  
    $("#education").hide();
    $("#contact").hide(); 
    $("#bio").hide(); 
    $("#skills").hide(); })

  $(".BTN_CLOSE").click(function () {
    $(this).closest(".window").fadeOut("fast", function () { });
  });
});


