// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i = 0; i < FROGS;i++) {
    
   let laneCreator = document.createElement("li");   // 2. Create li    
   document.querySelector("ol").appendChild(laneCreator)

   let spanMaker = document.createElement('span'); // 3. Create span and add it to the li
   laneCreator.appendChild(spanMaker)
   spanMaker.innerHTML = ` lane number ${[i]}`     // 4. Assign an id to each lane
    
}

 let racers = [];

 for (let i = 0; i < FROGS; i++) {
     racers.push(frogStable[i])
 }
 console.log(racers)