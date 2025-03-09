const container = document.querySelector("#container");
const resBtn = document.querySelector("#btn");
let resolution = 16;

resBtn.addEventListener('click',() => {
  let resolution = Number(window.prompt("Enter New Canvas Resolution (lower than 100)", 16));
  if(resolution > 100) {
    alert("Error. Please enter a number under 100");
  };
  console.log(resolution*resolution);
  container.innerHTML = '';
  drawDiv(resolution);
});
function drawDiv(resolution){
  for (let i = 0; i < resolution*resolution; i++) {
    const div = document.createElement("div");
    
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "white";
    div.style.border = "solid 1px";
    div.onmouseenter = (Event) => {
      div.style.backgroundColor = "darkgrey";
    } ;
    
    container.appendChild(div);
}
}

drawDiv();
