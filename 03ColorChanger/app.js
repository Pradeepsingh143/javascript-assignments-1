const button = document.querySelector("#button");
const canvas = document.querySelector("#canvas");

button.addEventListener("click", ()=>{
    const randomHexColor = `#${Array(6).fill().map(arr=>(Math.random()*16|arr).toString(16)).join("")}`;
    canvas.style.background = randomHexColor;
    // canvas.style.color = `#${randomHexColor.split("").reverse().join("").slice(0,6)}`;
});