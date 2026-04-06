class car{
    constructor(type,model,year){
        this.type = type,
        this.model = model,
        this.year = year
    }

    start(){
        console.log(`The ${this.type} ${this.model} ${this.year} is starting ....`);
    }
    drive(speed){
        console.log(`The ${this.type} ${this.model} is driving at ${speed} km/hr`);
    }
    stop(){
        console.log(`The ${this.type} ${this.model} is stoping`);
    }
}

const myCar = new car("Toyota","Corolla","2020");

myCar.start();
myCar.drive(80);
myCar.stop();