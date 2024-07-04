const date = new Date();

// Get methods
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCMinutes());
console.log(date.getUTCMonth());
console.log(date.getUTCSeconds());

// Set methods
date.setDate(1);
date.setFullYear(2022);
date.setHours(24);
date.setMilliseconds(120);
date.setMinutes(45);
date.setMonth(5);
date.setSeconds(60);
date.setTime(Date.now());
date.setUTCDate(10);
date.setUTCFullYear(2024);
date.setUTCHours(10);
date.setUTCMilliseconds(300);
date.setUTCMinutes(30);
date.setUTCMonth(7);
date.setUTCSeconds(30);

// other(conversion) methods
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toString());
console.log(date.toTimeString());
console.log(date.toUTCString());



// 1
setTimeout(function(){
    console.log("5 seconds have passed");
}, 5000);

// 2
let seconds = 0;
const interval = setInterval(function(){
    seconds++;
    console.log("1 second passed");
    if(seconds >= 60){
        clearInterval(interval);
        console.log("Minute passed");
    }
}, 1000);

// 3
setInterval(function(){
    const now = new Date();
    console.log(now.getSeconds());
}, 1000);

//

console.log(Math.random() * 5)

// Math.pow - ricxvis xarisxshi ayvana
// Math.pow(x, y) = გვიბრუნებს x ხარისხად y 
// Math.abs - uaryofs gaardaqmnis dadebitad
// Math.random - random ricxvis sheqmna
// Math.sqrt() = გვიბრუნებს ფესვს რიცხვიდან
// Math.min(0, 1, 15, 27, 18) = პოულობს გადაცემული მასივიდან ყველაზე მცირე რიცხვს 
// Math.max(0, 1, 15, 27, 18) = პოულობს გადაცემული მასივიდან ყველაზე დიდ რიცხვს

