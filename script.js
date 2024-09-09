/* PART 1: Create a program that advises a group of environmental scientists on how to handle the growth and spread of a unique plant species. Develop a growth control system to monitor and predict the plant growth, making decisions based on the available space and potential growth.*/

    // The area in which the plants are contained is circular, with a radius of 5 meters.
    const radius = 5;
    const PI = 3.1415;
    const area = PI * radius * radius;
    console.log(`Total garden capacity: ${area} square meters.`);
    // Each plant requires a minimum space of 0.8 square meters.
    const minSpace = 0.8;

    // Objective 1: Predict the plant growth for 1, 2, and 3 weeks of growth.

    // The area is starting with 20 plants on Week 1.
    console.log(`In Week 1: Plants will take up ${20*minSpace} square meters.`);

    // The plants double in number every week.
    function plantSpace(noPlants){ 
        noPlants *= 2;
        let plantSpace = noPlants * minSpace;
        return plantSpace
    }
    console.log(`In Week 2: Plants will take up ${plantSpace(20*(2**0))} square meters.`);
    console.log(`In Week 3: Plants will take up ${plantSpace(20*(2**1))} square meters.`);

    // Objective 2: Implement control flow to prune, monitor or plant.
    let week3Plantspace = plantSpace(20*(2**1));
    // Prune if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitor if plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Plant if plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
    if (week3Plantspace > 0.8*area) {
        console.log(`Plants are taking up ${(week3Plantspace/area)*100}% of garden space. It's time to prune some plants.`)    
    } else if (week3Plantspace >= 0.5*area) {
        console.log(`Plants are taking up ${(week3Plantspace/area)*100}% of garden space. Keep monitoring.`) 
    } else {
        console.log(`Plants are taking up ${(week3Plantspace/area)*100}% of garden space. Keep planting!`)
    }

// PART 2: The conservation area in which the garden is located has multiple other gardens. 
// Objective 1: Determine amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
console.log(`If the scientists were to start with 100 plants and there is no pruning for 10 weeks, the number of plants at Week 10 would be ${100*(2**8)}. The total amount of space taken by plants would be ${plantSpace(100*(2**8))} square meters, and the amount of additional space required would be ${plantSpace(100*(2**8))-area} square meters based on the current capacity of ${area} square meters.`)

// If the space remained circular, what would be the radius of this expanded garden?
let newArea = plantSpace(100*(2**8)); 
let newRadius = Math.sqrt(newArea/PI);
console.log(`If the space remained circular, the  radius of this expanded garden would be ${newRadius} meters.`)