const thebox = document.getElementById("thebox")
const container = document.getElementById("container")
const moveAmount = 10
let x = 0
let y = 0

document.addEventListener("keydown", function(){
    thebox.style.backgroundColor = "tomato"
    thebox.textContent = ' '
})

document.addEventListener("keyup", function(){
    thebox.style.backgroundColor = "orangered"
    thebox.textContent = ' '
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault()

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        const boxWidth = thebox.offsetWidth
        const boxHeight = thebox.offsetHeight
        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight


        if (x < 0){ 
            x = 0
        }
        else if (y < 0){
            y = 0
        }
        if (x > containerWidth - boxWidth){ 
            x = containerWidth - boxWidth
        }
        if (y > containerHeight - boxHeight){ 
            y = containerHeight - boxHeight
        }


        thebox.style.top = '${y}px';
        thebox.style.left = '${x}px';
    }
});