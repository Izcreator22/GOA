
const car = {
    brand: "Mercedes Benz",
    model: "S Class",
    maxSpeed: 250,
    currentSpeed: 0,

    acceleration(){
        this.currentSpeed += 10;
        console.log(this.currentSpeed, 'KM/H');
    }
}

car.model = "G class"

delete car.acceleration

console.log(car) 