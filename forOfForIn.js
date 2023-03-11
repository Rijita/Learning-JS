// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (var dairys of dairy)
        console.log(dairys);
    }
logDairy();

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (birds of Object.keys(bird))
        console.log(`${birds}: ${bird[birds]}`);
}
birdCan();

// Task 3
function animalCan() {
    for (animals in bird)
        console.log(`${animals}: ${bird[animals]}`);
}
animalCan()