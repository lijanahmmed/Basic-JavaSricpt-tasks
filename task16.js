function calculateSleepTime(times) {
  let sum = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sum = sum + time;
  }

  // calculate sleepTime
  let sleepSecond = sum;
  let hour = Math.floor(sleepSecond / 3600);
  sleepSecond = sleepSecond % 3600;
  let minute = Math.floor(sleepSecond / 60);
  sleepSecond = sleepSecond % 60;

  let result = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return result;
}
console.log(calculateSleepTime([6200, 4500, 5050]))


// Output
// { hour: 4, minute: 22, second: 30 }

