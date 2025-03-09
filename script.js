const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  //div.textContent = "h";
  div.style.width = "20px";
  div.style.height = "20px";
  div.style.backgroundColor = "grey";
  container.appendChild(div);
}