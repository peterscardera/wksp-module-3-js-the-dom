// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let i = 0; i < FROGS; i++) {
    
    let laneCreate = document.createElement("li");
    document.querySelector("ol").appendChild(laneCreate);
    laneCreate.id = `lane-${[i]}` // we dont do document.querySelector cause that would go back to the first

    let spanner = document.createElement("span");
    laneCreate.appendChild(spanner)
    spanner.innerHTML =   `lane number  ${[i]}  `

}

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
