// universal variables
var currentDay = $('#currentDay');
var today = moment();
// haven't implemented yet
var green = {'background-color': '#E0F1C2'}; // add .past or .future with the color and use in if else statement (.$(.future()).css(green))
var red = {'background-color': '#F39F9F'};
var gray = {'background-color': '#E0E0E0'};

// moment.js for current date
currentDay.text(today.format("dddd, MMMM Do YYYY"));

// add event listener on click to save buttons
    // once clicked should save to local storage
$(document).ready(function() {
    $('.btn').on('click', function(event) {
        var taskHour = $(this).parent('.input-group-append').parent('.input-group').attr('id');
        var task = $(this).parent().siblings('.form-control').val();

    localStorage.setItem(taskHour,task)
    })

    // colors blocks based on current hour
    function setColor() {
        var currentHour = today.hour();
        console.log(currentHour);

        // var time needs to target task ^ but couldn't get it to work
        $(".input-group").each(function() {
            var time = parseInt($(this).attr("id"));
            console.log(time); // ideally want to change to 12 hour clock

            // 9 10 11 12 13 14 15 16 17
            // 9 10 11 12  1  2  3  4  5 
            if (time < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (time === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    
    setColor();

    // when page is refreshed saved events persist
    $("#9 .form-control").val(localStorage.getItem("9"));
    $("#10 .form-control").val(localStorage.getItem("10"));
    $("#11 .form-control").val(localStorage.getItem("11"));
    $("#12 .form-control").val(localStorage.getItem("12"));
    $("#13 .form-control").val(localStorage.getItem("13"));
    $("#14 .form-control").val(localStorage.getItem("14"));
    $("#15 .form-control").val(localStorage.getItem("15"));
    $("#16 .form-control").val(localStorage.getItem("16"));
    $("#17 .form-control").val(localStorage.getItem("17"));


});










