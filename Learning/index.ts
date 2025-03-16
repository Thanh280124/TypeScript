interface Vehicle {
    start(): void;
    stop(): void;
}


class Car implements Vehicle {
    start() {
        console.log('Car started');
    }

    stop() {
        console.log('Car stopped');
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();