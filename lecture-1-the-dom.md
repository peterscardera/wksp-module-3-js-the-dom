# 2.3.1 - The DOM

---

When you load a web page in the browser...

1. Retrieves the HTML text and parses it.
2. Builds a _model_ of the document structure
3. Uses this model to render the page on the screen.

<Spacer size={24} />

This is the **D**ocument **O**bject **M**odel.

---

The DOM is a data structure that we can read and modify.

It acts as a _live_ data structure. When it's modified, the page on the screen is updated. 🤯

---

## So what does DOM look like?

You can see it in your developer tools in the browser.

It looks _almost_ identical to the HTML you wrote...

---

The DOM is actually your _corrected_ HTML. 

⚠️ This means that it is actually impossible to debug your HMTL with devTools.

---

A nested set of boxes

<img src="./assets/dom_example.png" />

---

- For each box, there is an objet that we can interact with
- Each node may contain/refer to other nodes that we call _children_.
- Similar to a tree.

---

End nodes are usually called leaves.

<img src="./assets/dom_tree.png" />

---

JavaScript can modify _all_ of the HTML elements on the page.

<img src=./assets/html_tree.gif style="height: 400px" />

---

## Target Elements

---

There are quite a few options for identifying/targeting elements in the DOM.

- [`.getElementsByTagName()`](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)
- [`.getElementsByClassName()`](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)
- [`document.querySelectorAll()`](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

These queries will return an array-like object of _all_ of the matching elements in the DOM.

---

We won't be using these methods very much at all.

- They are not quite as precise as we need.
- They return an array-like object that has some of the properties of an array but not all.
- `getElementsByClassName()` is also slower than other methods.

---

Instead, we will use these methods

- [`.getElementById()`](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [`.querySelector()`](https://www.w3schools.com/jsref/met_document_queryselector.asp)

```js
// Example
document.getElementById("my-Div")
document.querySelector("body")
document.querySelector("#my-Div) /*when we use querySelector we need to put the # */
document.querySelector("my-class")
document.querySelector("div.bacon > ul")
```

---

## Modify Elements


---

### Modify a Leaf

You can modify the content of a leaf, an end node with 

- [`.innerText()`](https://www.w3schools.com/jsref/prop_node_innertext.asp)
- [`.innerHTML()`](https://www.w3schools.com/jsref/prop_html_innerhtml.asp) 

```js
// Example
.innerText
.innerHTML

//we have to assign it to something first

const myTitle = document.getElementById('my-title');
myTitle innerText = "new tittttleee!"



```

---

### Add Node(s) to another node


---

To add a new node to an HTML page, you need to do it in 3 steps.

1. Create the new node
2. Add content to that node
3. add that node to an existing node.

---

- [`document.createElement()`](https://www.w3schools.com/jsref/met_document_createelement.asp)
- [`.appendChild()`](https://www.w3schools.com/jsref/met_document_createelement.asp)

```js
// Example

const newParagragh = document.createElement("p")' //create a p tag and we could assign to a variable if we want 

newParagraph.innerText = "new hacker right here" //

document.querySelector("body").appendchild(newParagraph) //target parent and inject p in the body 

```

---

### Styling DOM elements

We can style elements from JavaScript.

- Use the element's `style` attribute.
- Modify the `classList` of the element.

---

#### The `style` attribute

1. Target the element using one of the methods we've just learned.
2. Modify its `style` attribute.

`<div id="my-div">...content...</div>`

```js
const myDiv = document.getElementById('my-div');

myDiv.style.background = "purple";  //we cant put a dash!!

myDiv.style.border-radius = "23px"

the dash becomes a _
```

⚠️ Houston. We have a problem!

---

#### Using `classList`

Calling `myDiv.classList` returns a [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList).

😭 It is _read-only_, but ...

---

... it is _modifiable_. 😃

...
//it has its own methods attached to it


To modify a `classList`, we have a few methods we can call.

- `.add()`
- `.remove()`
- `.toggle()` //if the class is there it removes it  if its not it adds it in like for drop down menues

```js
// Example
myDiv.classList.add('primary');

myDiv.classList.remove('secondary');

myDiv.classList.toggle('active');
```
---

[Next lecture: Fundamentals (delay/timing)](../lecture-2-fundamentals-delay)