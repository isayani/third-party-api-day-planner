// Add in current date at top with moments js
// color code time blocks (gray = past; red = current; green = future;)
// add event listener on click to time block divs
    // once clicked you can enter an event per block
// event entered should save to local storage
// when page is refreshed saved events persist

// universal variables
var currentDay = $('#currentDay');


// moment.js for current date
var today = moment();
currentDay.text(today.format("dddd, MMMM Do YYYY"));
currentDay.append(today);
