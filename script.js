const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
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

