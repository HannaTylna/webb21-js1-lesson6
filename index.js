
class Animal{
    constructor(name, legs){
        this.name = name;// viktigt att ha "this"
        this.legs = legs;
    }
    speech(){//metod (funktion)
        return`${this.name} makes a noise`
    }
    numberOfLegs(){//metod (funktion)
        return `This animal has ${this.legs} legs`
    }
}
const dog = new Animal("Dog", 4);// classens instans
console.log(dog.speech());
console.log(dog.numberOfLegs());

const cat = new Animal ("Cat", 4);
console.log(cat.speech());
console.log(cat.numberOfLegs());

const spider = new Animal("Spider", 8);
console.log(spider.speech());
console.log(spider.numberOfLegs());