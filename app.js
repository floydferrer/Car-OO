class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    numWheels() {
        return 4;
    }
}

class Motorcycle extends Vehicle {
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.allVehicles = [];
    }
    vehicles() {
        return this.allVehicles;
    }
    add(vehicle) {
        if(!(vehicle instanceof Vehicle)) {
            return 'Vehicles only!'
        }
        if(this.allVehicles.length >= this.capacity) {
            return 'Garage is full!';
        } else {
            this.allVehicles.push(vehicle);
            return 'Vehicle added!';
        }
        
    }
    checkCapacity() {
        return `There are ${this.capacity - this.allVehicles.length} spots left.`
    }
}

class Pet {
    bark() {
        return 'ARF ARF!!'
    }
}