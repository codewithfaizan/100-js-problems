// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   let total = 0;
//   console.log("1", total);
//   for (let i = 0; i < args.length; i++) {
//     total += args[i]; // total = 0 + x
//     // x+y+z
//   }
//   console.log("2", total);
//   return total;
// };
// sum(1, 2, 3);

// console.log("ALHAMDULILLAH");

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

// ------------------------------------------------------
// console.log(highToday);
// console.log(highTomorrow);
// const { highToday : today,  highTomorrow :tomorrow  } = HIGH_TEMPERATURES

// console.log(  HIGH_TEMPERATURES.TempToday )

// -------------------------------------------------------
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
      
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  
  const {today : {low : lowToday, high : highToday}} = LOCAL_FORECAST

  console.log(lowToday, highToday)