// DATE

// 1
function getCurrentDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    return month + ' ' + day + ' ' + year;
}

console.log(getCurrentDate());

// 2
function getCurrentTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
}

console.log(getCurrentTime());

// 3
function getDayOfWeek(dayNumber){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[dayNumber % 7];
}

console.log(getDayOfWeek(1));

// 4
function daysBetween(date1, date2){
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

console.log(daysBetween("2024-07-01", "2024-07-15"));

// 5
function formatDay(date){
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    if (month < 10){
        month = "0" + month;
    }
    if (day < 10){
        day = "0" + day;
    }
    return year + '-' + month + '-' + day;
}

console.log(formatDay(new Date()));

// 6
function compareDates(date1, date2){
    const firstDate =  new Date(date1);
    const secondDate = new Date(date2);

    if (firstDate < secondDate){
        return date1 + "is earlier than" + date2;
    } else if (firstDate > secondDate){
        return date1 + "is later than" + date2;
    } else {
        return date1 + "and" + date2 + "are the same";
    }
}

console.log(compareDates("2024-06-01", "2024-06-20"));

// 7
function daysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(2, 2024));

// 8
function timeAgo(date){
    const now = new Date();
    const pastDate = new Date(date);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    const intervals = [
        {label: "year", seconds: 214123423},
        {label: "month", seconds: 1243453},
        {label: "day", seconds: 2352345},
        {label: "hour", seconds: 3678},
        {label: "minute", seconds: 60},
        {label: "second", seconds: 1},
    ];

    for (const i = 0; i < intervals.length; i++){
        const interval = intervals[i];
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1){
            return count + ' ' + interval.label + (count > 1 ? "s" : "") + "ago";
        }
    }
    return "just now";
}

console.log(timeAgo("2024-05-03"));

// 9
function daysUntilNextBirthday(birthdate){
    const now = new Date();
    const thisYear = now.getFullYear();
    const nextBirthday = new Date(birthdate);
    nextBirthday.setFullYear(thisYear);

    if (nextBirthday < now){
        nextBirthday.setFullYear(thisYear + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((nextBirthday - now) / oneDay);
}

console.log(daysUntilNextBirthday("2000-04-25"));

// 10
function calculateAge(birthdate){
    const now = new Date();
    const birthDate = new Date(birthdate);
    let Age = now.getFullYear() - birthDate.getFullYear();
    const monthDIfference = now.getMonth() - birthDate.getMonth();

    if (monthDIfference < 0 || (monthDIfference == 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge("2000-07-23"));




// MATH

// 1
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));

// 2
function calculateSquareRoot(number){
    return Math.sqrt(number);
}

console.log(calculateSquareRoot(9));

// 3
function roundNumber(number){
    return Math.round(number);
}

console.log(roundNumber(4.5));

// 4
function roundDown(number){
    return Math.floor(number);
}

console.log(roundUp(4.3));

// 5
function roundUp(number){
    return Math.ceil(number);
}

console.log(roundUp(4.3));

// 6
function compuetePower(base, exponent){
    return Math.pow(base, exponent);
}

console.log(compuetePower(2, 3));

// 7
function getAbsoluteValue(number){
    return Math.abs(number);
}

console.log(getAbsoluteValue(-5));

// 8
function getMaxNumber(array){
    return Math.max.apply(null, array);
}

console.log(getMaxNumber([1, 2, 3, 4, 5]));

// 9
function getRandomBoolean(){
    return Math.random() >= 0.5;
}

console.log(getRandomBoolean());

// 10
function getRandomRGBColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(' + r + ',' + g + ',' + b + ')";
}

console.log(getRandomRGBColor());




// SETINTERVAL

// 1
function countdown(seconds){
    const interval = setInterval(function(){
        console.log(seconds + "second remaining");
        seconds--;
        if (seconds < 0){
            clearInterval(interval);
            console.log("Time's up, over, blaow");
        }
    }, 1000);
}

countdown(10);

// 2
function digitalClock(){
    setInterval(function(){
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        if (horus < 10){
            hours = "0" + hours;
        }
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }

        console.log(hours + ":" + minutes + ":" + seconds);
    }, 1000);
}

digitalClock();

// 3
setInterval(function(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}, 2000);

// 4
function updateDateTime(){
    const now = new Date();
    const date = now.toDateString();
    const time = now.toTimeString().split(" ")[0];
    document.getElementById("datetime").innerText = date + " " +  time;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// 5
function randomWordGenerator(){
    const words = ["a", "b", "c", "d", "e", "f", "g"];

    setInterval(function(){
        const randomIndex = Math.floor(Math.random() * words.length);
        console.log(words[randomIndex]);
    }, 2000);
}

randomWordGenerator();




// SETTIMEOUT

// 1
setTimeout(function(){
    alert("Hello");
}, 2000);

// 2
function countdown(){
    let count = 5;
    const interval = setInterval(function(){
        console.log(count);
        count--;
        if (count < 0){
            clearInterval(interval);
        }
    }, 1000);
}

setTimeout(countdown, 2000);

// 3
function showSuccessMessage(){
    console.log("Success messsage shwon");

    setTimeout(function(){
        console.log("Successs message hidden");
    }, 5000);
}

showSuccessMessage();
