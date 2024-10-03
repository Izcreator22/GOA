// 1
function* infiniteNumbers(){
    let i = 0
    while (true){
        yield i++
    }
}

const numGen = infiniteNumbers()
console.log(numGen.next().value)
console.log(numGen.next().value)
console.log(numGen.next().value)


// 2
function* evenNumbers(){
    let i = 0
    while(true){
        yield i
        i += 2
    }
}

const evenGen = evenNumbers()
console.log(evenGen.next().value)
console.log(evenGen.next().value)
console.log(evenGen.next().value)


// 3
function* randomNumbers(){
    while (true){
        yield Math.random()
    }
}

const randGen = randomNumbers()
console.log(randGen.next().value)
console.log(randGen.next().value)


// 4
function* letterByLetter(word){
    for (let letter of word){
        yield letter
    }
}

const letterGen = letterByLetter()
console.log(letterGen.next().value)
console.log(letterGen.next().value)
console.log(letterGen.next().value)


// 5
function* randomPassword(){
    const digits = "32487238907450"
    while (true) {
        let password = ''
        for (let i = 0; i < 8; i++){
            password += digits[Math.floor(Math.random() * digits.length)]
        }
        yield password
    }
}

const passGen = randomPassword()
console.log(passGen.next().value)


// 6
function* complexPassword(){
    const characters = 'qwedfklfnsadfjasfhlohsafQWRDHAWFJLFAJKOPJEDI0123456789!@#$%^&*()აბგდევზთიკლმნოპჟ'
    while (true){
        let password = ''
        for (let i = 0; i < 8; i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        yield password
    }
}

const complexPassGen = complexPassword()
console.log(complexPassGen.next().value)

