let timerInterval;

// Event listeners and event handler functions
document.getElementById('datetime').addEventListener('change', resetTimer);
document.getElementById('startBtn').addEventListener('click', startTimer);

function resetTimer() {
  clearInterval(timerInterval); // Clear any existing timer
  resetTimerDisplay();
}

function startTimer() {
  resetTimer(); // Reset timer before starting

  const countdownDate = new Date(document.getElementById('datetime').value).getTime();

  timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update timer display
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);

    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById('timer').innerHTML = '<h2>Time Up!</h2>';
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function resetTimerDisplay() {
  // Iterate over timer elements to reset their content
  const timerElements = document.querySelectorAll('#timer span');
  timerElements.forEach(element => {
    element.innerText = '00';
  });
}
