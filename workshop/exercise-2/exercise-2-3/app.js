// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i = 0; i < FROGS; i++) {
    
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    laneCreate.id = `lane-${[i]}` // we dont do document.querySelector cause that would go back to the first

    let spanner = document.createElement("span");
    laneCreate.appendChild(spanner)
    spanner.textContent =   `L${[i]}  `;

}

let racers = [];

for (let x = 0; x < FROGS; x++) {
    racers.push(frogStable[x]);
}
console.log(racers);

/// 2-3

racers.forEach(function(item, location) {
    const frogInLane = document.createElement("span");
    frogInLane.textContent = `${item.number}`
    frogInLane.classList.add("frog");
    frogInLane.style.background = item.color;
    document.getElementById(`lane-${location}`).appendChild(frogInLane);

    racers[location].progress = 0 //adding progress key in opbject
    racers[location].laneCreate = `lane${location}`;


    const progress = document.createElement("span");
    progress.id = racers[location].name;
    document.getElementById(`lane-${location}`).appendChild(progress)

})