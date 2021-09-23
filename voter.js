class Voter{
    constructor(age) {
        this.age = age;
    }
    canVote(){
        return this.age >= 18;
    }
}

const voter1 = new Voter(17);
console.log( voter1.canVote() );

const vote2 = new Voter(23);
console.log( vote2.canVote() );