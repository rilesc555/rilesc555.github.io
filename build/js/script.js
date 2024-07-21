$(document).ready(function () {
  $("#btn_bio").click(function () { 
    $("#bio").fadeIn("fast", function () { }); });
  $("#btn_bio").click(function () { 
    $("#education").hide(); });
  $("#btn_education").click(function () { 
    $("#education").fadeIn("fast", function () { }); });
  $("#btn_education").click(function () { 
    $("#bio").hide(); });  
  //this function uses button to link to resume pdf
    $("#btn_resume").click(function () {
      window.location.assign("./resume.pdf");
    })
  $("#btn_home").click(function() {
    $("#bio").fadeIn("fast", function () {});  })
  $("#btn_home").click(function() {
    $("#education").hide();  })
  $(".BTN_CLOSE").click(function () {
    $(this).closest(".window").fadeOut("fast", function () { });
  });
});


