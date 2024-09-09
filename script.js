/* PART 1: Create a program that advises a group of environmental scientists on how to handle the growth and spread of a unique plant species. Develop a growth control system to monitor and predict the plant growth, making decisions based on the available space and potential growth.*/

// The area in which the plants are contained is circular, with a radius of 5 meters.
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
const minSpace = 0.8;

// Objective 1: Predict the plant growth for 1, 2, and 3 weeks of growth.
// The plants double in number every week.
function plantSpace(noPlants){ 
    noPlants *= 2;
    let plantSpace = noPlants * minSpace;
    return plantSpace
}
// The area is starting with 20 plants at Week 0.
console.log(`At the end of Week 1: Plants will take up ${plantSpace(20*(2**0))} square meters.`);
console.log(`At the end of Week 2: Plants will take up ${plantSpace(20*(2**1))} square meters.`);
console.log(`At the end of Week 3: Plants will take up ${plantSpace(20*(2**2))} square meters.`);

// Objective 2: Implement control flow to prune, monitor or plant.
// Prune if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitor if plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Plant if plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.