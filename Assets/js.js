//moment add attr of text area to present, past, future
// moment().format("MMM Do YY");
var currentDay = moment().format("MMM Do YYYY");
$("#currentDay").text(currentDay);
console.log(currentDay);
var currentHour = moment().format("HH");

var textAreaEl = $("textarea");
console.log(textAreaEl);

$.each(textAreaEl, function () {
  var dataTime = $(this).data("time");
  console.log();

  if (currentHour == dataTime) {
    $(this).addClass("present");
  } else if (currentHour > dataTime) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});
$("button").click(function () {
  var dataTime = $(this).data("time");
  for (let i = 0; i < textAreaEl.length; i++) {
    var item = $(textAreaEl[i]).data("time");
    if (dataTime == item) {
      console.log($(textAreaEl[i]).val());
      localStorage.setItem(dataTime, $(textAreaEl[i]).val() );
    }

    //localStorage.setItem('settings', JSON.stringify(settings));

    //let storedSettings = JSON.parse(localStorage.getItem('settings'));
    //console.log(storedSettings);
    

    var words = JSON.parse(localStorage.getItem("text"));

    $("#9-am-text .data-time").val(localStorage.getItem("9"));
    $("#10-am-text .description").val(localStorage.getItem("10"));
    $("#11-am-text .text-area").val(localStorage.getItem("11"));
    $("#12-pm-text .data-time").val(localStorage.getItem("12"));
    $("#1-pm-text .data-time").val(localStorage.getItem("13"));
    $("#2-pm-text .data-time").val(localStorage.getItem("14"));
    $("#3-pm-text .data-time").val(localStorage.getItem("15"));
    $("#4-pm-text .data-time").val(localStorage.getItem("16"));
    $("#5-pm-text .data-time").val(localStorage.getItem("17"));
  }

});

//load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
