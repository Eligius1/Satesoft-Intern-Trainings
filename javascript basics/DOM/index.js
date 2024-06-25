//creating a new tag
let paragraph = document.createElement("p");

//asigning a value
paragraph.innerHTML = "My paragraph",

document.body.appendChild(paragraph);

//reading out html code
let h1Tag = document.querySelector("#h1");
let newDomText = "Document Object Module";

let h1Text = h1Tag.innerHTML;

//logging the initial h1 text
console.log(h1Text);

//manipulating the h1 element
h1Tag.innerHTML = newDomText;
let paragraph2=document.createElement("p");
paragraph2.innerHTML ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima dignissimos amet beatae quidem dolorum? Nulla dolore, excepturi esse nesciunt quo neque eos omnis ipsum repellat reprehenderit consequuntur quisquam assumenda?'
document.body.appendChild(paragraph2);

