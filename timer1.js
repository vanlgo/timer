const beeps = process.argv.slice(2);

// SOUND NOT WORKING, WRITING OUT ALERTS INSTEAD
const timer = function(times) {
  let alarmArr = [];
  for (const t of times) {
    if (t > 0) {
      alarmArr.push(t);
    }
  }
  let alertSet = alarmArr[0] * 1000;
  for (let i = 0; i < alarmArr.length; i++) {
    alertSet = alarmArr[i] * 1000;
    setTimeout(() => {
      process.stdout.write(`${alarmArr[i]} sec `);
    }, alertSet);
  }
};


timer(beeps);