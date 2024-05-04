// Inside your background service worker script

// Function to update sync storage with the countdown value
function updateSyncStorage(value) {
  chrome.storage.sync.set({ countdown: value }, function() {
    console.log('Countdown updated to ' + value + ' seconds');
  });
}




// Function to retrieve and log the countdown value from sync storage
function logSyncStorage() {
  chrome.storage.sync.get('countdown', function(result) {
    console.log('Countdown value currently is ' + result.countdown + ' seconds');
  });
}

// Start countdown timer
let countdown = 60;

// Update sync storage with initial countdown value
updateSyncStorage(countdown);

// Start countdown
const countdownInterval = setInterval(() => {
  countdown--;

  // Update sync storage with new countdown value
  updateSyncStorage(countdown);

  // Log the updated value
  logSyncStorage();

  // If countdown reaches 0, clear the interval
  if (countdown === 0) {
    clearInterval(countdownInterval);
    console.log('Countdown finished');
  }
}, 1000);
