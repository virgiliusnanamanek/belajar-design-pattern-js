class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case "civic":
                return new Car(4, "v4", "red");
            case "honda":
                return new Car(2, "v6", "blue");

            case "ford":
                return new Car(4, "v8", "black");

            case "toyota":
                return new Car(4, "v6", "white");

            case "nissan":
                return new Car(4, "v6", "black");

            case "mercedes":
                return new Car(4, "v8", "red");
        }
    }
}

const carFactory = new CarFactory();

const myCivic = carFactory.createCar("civic");
const myHonda = carFactory.createCar("honda");
const myFord = carFactory.createCar("ford");
const myToyota = carFactory.createCar("toyota");
const myNissan = carFactory.createCar("nissan");
const myMercedes = carFactory.createCar("mercedes");

console.log(myCivic);
console.log(myHonda);
console.log(myFord);
console.log(myToyota);
console.log(myNissan);
console.log(myMercedes);

