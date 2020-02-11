# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example

setTimeout(function(){
    console.log("hello")
},1000) //1000 ms which is 1 second

//after 3 seconds it prints hello 


```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example

setInterval(function(){
    console.log("here");
},1000)


///typically we would assign it to a variable 
const myTimer = setInterval(function(){
    console.log("here");
},1000);

//to stop interval
clearInterval(myTimer;)

```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


