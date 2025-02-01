// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Set the target launch date (customize this date as needed)
    const launchDate = new Date("February 20, 2025 00:00:00").getTime();
  
    // Update the countdown every second
    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = launchDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="clock"
      document.getElementById("clock").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("clock").innerHTML = "We have launched!";
      }
    }, 1000);
  });
  