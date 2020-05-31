class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
           return description += ` Their major is ${this.major}`; 
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return!!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am from ${this.homeLocation}`;
            return greeting;
        }
        return greeting;

    }
    
}

const me = new Traveler('Ali Zahid', 'Islamabad');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());