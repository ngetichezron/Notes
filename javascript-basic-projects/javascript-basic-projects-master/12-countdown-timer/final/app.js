const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();


/*

This JavaScript code is a countdown timer for a giveaway.

The code starts by defining two arrays: "months" 
and "weekdays," which contain the names of the months 
and days of the week, respectively.

Then, the code selects HTML elements with the classes 
"giveaway" and "deadline" using the 
document.querySelector() method and all elements with 
the class "deadline-format h4" using the 
document.querySelectorAll() method.

Next, the current date is obtained using the 
new Date() method and stored in the tempDate variable. 
The current year, month, and day are extracted from 
the tempDate variable and stored in the tempYear, 
tempMonth, and tempDay variables, respectively.

Using the extracted year, month, and day, the future 
date for the giveaway is calculated by adding ten days 
to the current date and setting the time to 11:30 AM. 
This future date is stored in the futureDate variable.

The year, hours, minutes, month, weekday, and date of 
the future date are extracted and stored in their 
respective variables.

The giveaway text is then updated with the future date 
information using string interpolation.

A function getRemaindingTime() is defined that 
calculates the remaining time until the future date. 
It calculates the difference between the future date 
and the current time, and then calculates the remaining 
days, hours, minutes, and seconds from that difference.

The format() function is defined to format the values 
to include leading zeros if they are less than 10.

The values are then updated in the HTML elements 
selected earlier using a forEach() loop on the items 
variable.

If the remaining time is less than 0, meaning the 
giveaway has expired, the clearInterval() method is 
called on the countdown variable to stop the countdown 
timer. The HTML element with the class "deadline" is 
updated with a message indicating that the giveaway has 
expired.

Finally, the getRemaindingTime() function is called to 
set the initial values of the countdown timer, and the 
countdown timer is started using the setInterval() 
method.

*/