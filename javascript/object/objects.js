let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    doors: 4,
    honk: function() {
        console.log("Beep beep!");
    }
}

console.log("Carro: " + car.brand + " " + car.model + ", " + car.year + ", " + car.doors + " doors.");
console.log(car);

delete car.doors; // Remove property
car["year"] = 2022; // Update property
car["color"] = "red"; // Add property
car["aceleration"] = function(times) { // Add function property
    for (let i = 0; i < times; i++) {
        console.log("Vroom!");
    }
}

let carJson = JSON.stringify(car);
console.log(carJson);

car.aceleration(3);
car.honk();