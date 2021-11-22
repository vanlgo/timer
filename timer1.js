const beeps = process.argv.slice(2);

const timer = function(times) {
  for (let i = 0; i < times.length; i++) {
    if (times[i] > 0) {
      let alertSet = times[i] * 1000;
      setTimeout(() => {
        process.stdout.write(`${times[i]} sec `); //mostly for myself to visualize
        process.stdout.write('\x07');
      }, alertSet);
    }
  }
};

timer(beeps);