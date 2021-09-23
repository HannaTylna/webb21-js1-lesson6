
class Animal{
    constructor(name, legs){
        this.name = name;// important to write "this."
        this.legs = legs;
    }
    speech(){//method (funktion)
        return`${this.name} makes a noise`
    }
    numberOfLegs(){//method (funktion)
        return `This animal has ${this.legs} legs`
    }
}
const dog = new Animal("Dog", 4);// an instance of the class
console.log(dog.speech());
console.log(dog.numberOfLegs());
const cat = new Animal ("Cat", 4);
console.log(cat.speech());
console.log(cat.numberOfLegs());

const spider = new Animal("Spider", 8);
console.log(spider.speech());
console.log(spider.numberOfLegs());