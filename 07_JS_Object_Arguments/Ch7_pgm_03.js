// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

var cars;
var car1;
var car2;
var getcarinfo;

cars = function (name,company,price,model,type) {
    return {
        name: name,
        company: company,
        price: price,
        model: model,
        type: type
    }
};

getcarinfo = function(cars) {
    return cars.name.toUpperCase() + " from " + cars.company + " is $ " + cars.price + " is a " + cars.type;
};

car1 = cars("Virtus","Volkswagon",1500000,2022,"Sedan");
car2 = cars("Rapid","Skoda",1600000,2022,"Sedan");

console.log(getcarinfo(car1));
console.log(getcarinfo(car2));

/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */