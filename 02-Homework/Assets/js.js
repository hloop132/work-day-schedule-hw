//moment add attr of text area to present, past, future
// moment().format("MMM Do YY"); 
var currentDay = moment().format("MMM Do YYYY");
$('#currentDay').text(currentDay);

//current hour < past
//current hour === present
//current hour> future 
function currentHourEl(){
    var currentHour = moment().format('HH');
    $('.hour').each(function (){ var hourSection = parseInt($(this).attr('id'))
//run each text area el throw function 
if (hourSection < currentHour) {
    $(this).siblings('.description').addClass("past")
} 
else if (hourSection == currentHour) { 
    $(this).siblings(".description").addClass("present")
} 
else {
    $(this).siblings(".description").addClass("future")
}

currentHourEl()
})}

    //local storage
    //function save
    //function load
    $(document).ready(function (){
        $(".saveBtn").on("click", function(){
            var value = $(this).siblings(".description").val()
            var time = $(this).siblings().attr("id")
      
            localStorage.setItem("key", value)
            } )})
    
            
