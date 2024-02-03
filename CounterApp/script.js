let newBtn=document.createElement("button");

newBtn.innerText="clickMe";
console.log(newBtn);

let div=document.querySelector("div");
div.after(newBtn);   

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am New!..</i>";
document.querySelector("body").prepend(newHeading);


//delete

let para=document.querySelector("p");
para.remove();

newHeading.remove();