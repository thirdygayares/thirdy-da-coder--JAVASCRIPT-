//oop



//contructor fuction



//class

class Tao {
    constructor(firstname, lastmame, bt){
        this.firstname = firstname;
        this.lastmame = lastmame;
        this.bt = bt;
    }

    getFullName(){
        return `${this.firstname} ${this.lastmame}`;
    }

}


const tao1 = new Tao("thirdy", "gayares", "A");

console.log(tao1.getFullName());
