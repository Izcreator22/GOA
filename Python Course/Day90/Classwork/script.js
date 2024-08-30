const buttons = document.querySelectorAll("button")
const slider = document.querySelector(".slider")


let counter16 = 0
buttons[0].onclick = () => {
    const imgWidth = slider.clientWidth
    const sliderChildren = slider.Children
    counter16++

    if(counter16 >= sliderChildren.length){
        counter16 = 0
    } else if (counter16 < 0){
        counter16 = 0
    }
    slider.scrollTo({
        left: imgWidth * counter16,
        behavior: "smooth"
    })
}

buttons[1].onclick = () => {
    console.log("xtdxyuflh")
}