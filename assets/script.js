// color code time blocks (gray = past; red = current; green = future;)
// when page is refreshed saved events persist

// universal variables
var currentDay = $('#currentDay');
var today = moment();
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
    var time = today.hour(9-17);
    console.log(time);


})










