const container = document.querySelector("#container")


// a <p> with red text that says “Hey I’m red!”

const redP = document.createElement("p");
redP.classList.add("red");
redP.style.color = "red"
redP.textContent = "Hey I'm red"

container.appendChild(redP)

// an <h3> with blue text that says “I’m a blue h3!”

const blueh3 = document.createElement("h3");
blueh3.textContent = "I'm a blue h3";
blueh3.style.color = "blue";

container.appendChild(blueh3)

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const blackpinkDiv = document.createElement("div")
blackpinkDiv.style.backgroundColor = "pink";
blackpinkDiv.style.borderColor = "black";
blackpinkDiv.style.borderStyle = "solid";
blackpinkDiv.style.borderWidth = "1px";
const bph1 = document.createElement("h1")
bph1.textContent = "I'm in a div"
const bpp = document.createElement("p")
bpp.textContent = "ME TOO!"

blackpinkDiv.appendChild(bph1)
blackpinkDiv.appendChild(bpp)

container.appendChild(blackpinkDiv);




