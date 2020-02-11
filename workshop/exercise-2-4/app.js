// Preset values
const FROGS = 3;
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
//the frog tracl

let track = document.getElementById("track");


for (let i = 0; i < FROGS; i++) {
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    laneCreate.id = `lane-${[i]}` // we dont do document.querySelector cause that would go back to the first

    let spanner = document.createElement("span");
    laneCreate.appendChild(spanner)
    spanner.textContent =   `L${[i]}`;
}

let racers = [];

for (let x = 0; x < FROGS; x++) {
    let frogInLane = frogStable[x];
    racers.push(frogInLane)
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
    racers[location].laneCreate = `lane-${location}`;


    let progress = document.createElement("span");
    progress.id = racers[location].name;
    document.getElementById(`lane-${location}`).appendChild(progress)

})
// 2-4 make them hop

function racingFrog(racer) {
    let progress = racer.progress;
    const trackWidth = track.offsetWidth;

    // set a random hop length
    const hopLength = (Math.floor(Math.random() * 100) / trackWidth * 100);

    const bounce = setInterval(function() {
        // increase the progress by the random hopLength
        progress += hopLength;
        // Check if progress is more than 100%. If so, set it to 100.1
        if (progress > 100) {
            progress = 100.1;
            console.log(racer.name, " has finished!");
            clearInterval(bounce);
        }
        
        // Moving the frog on the screen
       let movement = document.querySelector(`#${racer.laneCreate} .frog`);
       movement.style.left = `${progress}%`;
    }, Math.random() * 1000);
}

//2.5 were calling it for each rf
racers.forEach(function(racer) {
   
    racingFrog(racer);
});