const beeps = process.argv.slice(2);

// SOUND NOT WORKING, WRITING OUT ALERTS INSTEAD
const timer = function(times) {
  for (let i = 0; i < times.length; i++) { 
    if (times[i] > 0) {
      let alertSet = times[i] * 1000;
      setTimeout(() => {
        process.stdout.write(`${times[i]} sec `);
      }, alertSet);
    }
  }
};

timer(beeps);