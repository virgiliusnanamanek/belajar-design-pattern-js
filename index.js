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
        }
    }
}

const carFactory = new CarFactory();

const myCivic = carFactory.createCar("civic");

console.log(myCivic);

