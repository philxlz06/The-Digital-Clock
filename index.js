function updateClock() {
    const now = new Date();  // Get the current time
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Add a leading zero if the value is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Display the time in the format HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the clock every second (1000 ms)
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately on page load
  updateClock();