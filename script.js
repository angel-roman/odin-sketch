const GRID = 16 * 16;
const canvas = document.querySelector("#canvas");
for(let i = 0; i < GRID; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    canvas.appendChild(div);
    div.style.width = `calc(100%/${16})`;
    div.style.height = `calc(100%/${16})`;
}


function createCanvas(){
    let input = 0;
    while(input == 0){
        let num = prompt("Ingrese el tamaño del lienzo (16-100): ")
        if(num >= 16 && num <= 100){
            input = num;
        }
    }
    draw(input);
}

function draw(num){
    canvas.innerHTML = "";
    for(let i = 0; i < (num*num); i++){
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        canvas.appendChild(div);
        div.style.width = `calc(100%/${num})`;
        div.style.height = `calc(100%/${num})`;
        div.addEventListener('mouseover', function() {
            let red = Math.random() * 256;
            let green = Math.random() * 256;
            let blue = Math.random() * 256;
            div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
            div.style.animationDuration = "500ms";
            div.style.colo
        });
    }
}