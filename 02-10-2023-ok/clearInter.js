// Initialize a counter variable to keep track of how many times the interval has run
let counter = 0;

// Start a repeating timer using setInterval. This function will run every 1000 milliseconds (1 second)
const intervalId = setInterval(() => {
    // Log "Hello World" to the console each time the interval runs
    console.log('Hello World');
    
    // Increment the counter by 2
    counter += 2;

    // Check if the counter has reached exactly 5
    if (counter === 5) {
        // If so, log "Done" to the console
        console.log('Done');
        
        // Stop the interval so it doesn't run anymore
        clearInterval(intervalId);
    }
}, 1000); // 1000 milliseconds = 1 second
