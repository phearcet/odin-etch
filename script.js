const container = document.querySelector("#container");
const resBtn = document.querySelector("#btn");
let resolution = 16;

resBtn.addEventListener('click',() => {
  let resolution = Number(window.prompt("Enter New Canvas Resolution (lower than 100)", '16'));
  if(resolution > 100) {
    alert("Error. Please enter a number under 100");
  };
  console.log(resolution*resolution);
  container.innerHTML = '';
  drawDiv(resolution);
});

const row = document.createElement("div");
row.classList.add("row");

const gridItem = document.createElement("div");
gridItem.classList.add("gridItem");

function drawDiv(resolution){
  let i = 1;
  while (i <= resolution) {
    container.appendChild(row.cloneNode(true));
    i++;
  }

  let rows = Array.from(container.querySelectorAll("div"));
  rows.forEach(node => {
    let i = 1;
    while (i <= resolution) {
      node.appendChild(gridItem.cloneNode(true));
      i++;
    }
  });

  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("gridItem")) {
      e.target.style.backgroundColor = "darkgrey";
    }
  })
}


drawDiv(resolution);
