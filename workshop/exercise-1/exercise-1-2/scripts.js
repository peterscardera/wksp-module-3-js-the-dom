const headerOne = document.createElement("h1");
headerOne.innerHTML = "The best How I met Your Mother episode (according to fans)"
document.getElementById("main").appendChild(headerOne)

const firstP = document.createElement("p");
firstP.innerHTML = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.getElementById("main").appendChild(firstP)

const headerTwo = document.createElement("h2");
headerTwo.innerHTML = "The Slap Bet (Season 2, Episode 9)";
document.querySelector("#main").appendChild(headerTwo);

const rating = document.createElement("p");
rating.innerHTML = "IMDB Rating: 9.5"
document.getElementById("main").appendChild(rating)

const picture = document.createElement("img");
picture.src = "/workshop/exercise-1/exercise-1-1/images/robin-sparkles.jpg";
document.getElementById("main").appendChild(picture)

const secondP = document.createElement("p");
secondP.innerHTML = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased."
document.getElementById("main").appendChild(secondP)

const thirdP = document.createElement("p");
thirdP.innerHTML = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."
document.querySelector("#main").appendChild(thirdP)

const anchorTag = document.createElement("a");
anchorTag.innerHTML = "Source"
anchorTag.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
document.getElementById("main").appendChild(anchorTag).innerHTML = "Source"


const linker = document.createElement("link");
linker.href= "/workshop/exercise-1/exercise-1-2/styles.css";
linker.rel = "stylesheet";
document.head.appendChild(linker);

headerOne.classList.add("h1");
headerTwo.classList.add("h2");
firstP.classList.add("p");
secondP.classList.add("p");
thirdP.classList.add("p");
picture.classList.add("img");
anchorTag.classList.add("a");