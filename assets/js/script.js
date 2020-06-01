//variables 
var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
const newLocal = $(".saveBtn");
var saveBtn = newLocal;


// set attributes to each hour from 9 to 5 
$("#9bt").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10bt").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11bt").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12bt").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1bt").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2bt").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3bt").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4bt").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5bt").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));




$(document).ready(function () {

    // function to populate information located in localstorage
    infoSchedule();
    // variable current day 
    var currentDay = moment().format("dddd, MMMM Do");
    // p tag display current day in html
    $("#currentDay").text(currentDay);


    // for loop to define color based time of the day
    for (var ii = 1; ii <= 12; ii++) {
        var inputTime = $(`#${ii}bt`).attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        // Set color  based on current time 
        if (currentTimeInt === inputTimeInt){
            // applied string to the function
            $(`#${ii}bt`).addClass("present");
            
        }

        if (currentTimeInt > inputTimeInt){
            // applied string to the function
            $(`#${ii}bt`).addClass("past");
        }

        if (currentTimeInt < inputTimeInt){
            // applied string to the function
            $(`#${ii}bt`).addClass("future");
        }

    }

//  click the save button for that time block

    saveBtn.on("click", function () {
        // set a variable to select the clicked-on-button's data-hour attribute which we set in the HTML
        var hour = $(this).attr("data-hour");
        var plan = $(`#${hour}bt`).val();
        // saved in local storage
        localStorage.setItem(hour, plan);
    });

    function infoSchedule() {
                for (var ii = 1; ii <= 12; ii++) {
            // select the 
            $(`#${ii}bt`).val(localStorage.getItem(ii));
        }
    }


});