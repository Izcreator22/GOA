// 1
function* oddNumbers(){
    let i = 1
    while (true){
        yield i
        i += 2
    }
}

const oddGen = oddNumbers()
console.log(oddGen.next().value)
console.log(oddGen.next().value)
console.log(oddGen.next().value)


// 2
function* daysOfWeek(){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let index = 0
    while (true){
        yield days[index]
        index = (index + 1) % days.length
    }
}

const daysGen = daysOfWeek()
console.log(daysGen.next().value)
console.log(daysGen.next().value)
console.log(daysGen.next().value)


// 3
function* fibonacci(){
    let a = 0, b = 1;
    while (true){
        yield a;
        [a, b] = [b, a + b]
    }
}

const fibGen = fibonacci();
console.log(fibGen.next().value)
console.log(fibGen.next().value)
console.log(fibGen.next().value)
console.log(fibGen.next().value)


// 4
function* repeatPhrase(phrase, times){
    let count = 0;
    while (count < times){
        yield phrase;
        count++;
    }
}

const phraseGen = repeatPhrase("Hello World", 3)
console.log(phraseGen.next().value)
console.log(phraseGen.next().value)
console.log(phraseGen.next().value)

