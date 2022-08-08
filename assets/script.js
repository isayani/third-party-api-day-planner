// universal variables
var currentDay = $('#currentDay');
var today = moment();

// moment.js for current date
currentDay.text(today.format("dddd, MMMM Do YYYY"));

// open function after init load
$(document).ready(function() {
    // add event listener on click to save buttons
    // once clicked saves to local storage (key, value)
    $('.btn').on('click', function(event) {
        var taskHour = $(this).parent('.input-group-append').parent('.input-group').attr('data-id');
        var task = $(this).parent().siblings('.form-control').val();

    localStorage.setItem(taskHour,task)
    })

    // colors blocks based on current hour
    function setColor() {
        var currentHour = today.hour();

        // for each to loop through array
        $(".input-group").each(function() {
            var time = parseInt($(this).attr("data-id"));

            // 9 10 11 12 13 14 15 16 17
            // 9 10 11 12  1  2  3  4  5 
            if (time < currentHour) {
                $('#'+time).removeClass("future");
                $('#'+time).removeClass("present");
                $('#'+time).addClass("past");
            } else if (time === currentHour) {
                $('#'+time).removeClass("past");
                $('#'+time).removeClass("future");
                $('#'+time).addClass("present");
            } else {
                $('#'+time).removeClass("present");
                $('#'+time).removeClass("past");
                $('#'+time).addClass("future");
            }
        })
    }
    
    // call color function
    setColor();

    // when page is refreshed gets saved items from local storage
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));

});










