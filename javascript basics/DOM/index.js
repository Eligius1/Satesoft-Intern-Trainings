//creating a new tag
let paragraph = document.createElement("p");

//asigning a value
paragraph.innerHTML = "My paragraph";

document.body.appendChild(paragraph);

//reading out html code
let h1Tag = document.querySelector("#h1");
let newDomText = "Document Object Module";

let h1Text = h1Tag.innerHTML;

//logging the initial h1 text
console.log(h1Text);

//manipulating the h1 element
h1Tag.innerHTML = newDomText;
//adding body
let h1=document.createElement("h1");
h1.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio modi, quasi consequatur doloribus animi expedita iste eligendi unde numquam natus suscipit impedit ab ducimus facilis incidunt quidem cum sunt?";
document.body.appendChild(h1);
