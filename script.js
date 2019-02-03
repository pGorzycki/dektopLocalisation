const div = document.querySelector("div");
let divX = 150;
let divY = 100;
div.style.left = divX +"px";
div.style.top = divY +"px";
let instertDivX;
let instertDivY;
let drawActive = false;

div.addEventListener('mousedown', (e) => {
        div.style.backgroundColor = "gray";
        instertDivX = e.offsetX;
        instertDivY = e.offsetY;
        drawActive = !drawActive;
    }
);

div.addEventListener("mousemove", (e) => {
    if (drawActive) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = `${divX - instertDivX}px`;
        div.style.top = `${divY - instertDivY}px`;
    }
});

div.addEventListener("mouseup", () => {
    div.style.backgroundColor = "black";
    drawActive = !drawActive;
    let divLocX = divX + div.style.width / 2;
    let divLocY = divY + div.style.height/ 2;
    div.textContent = `Pozycja na stronie to ${divLocX}, ${divLocY}`;
});
