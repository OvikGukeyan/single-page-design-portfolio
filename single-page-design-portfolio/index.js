const flowContainer = document.getElementById('flowContainer')
const scrollLeftButton = document.getElementById('scrollLeft')
const scrollRightButton = document.getElementById('scrollRight')


const scrollLeft = () => {
    flowContainer.scrollLeft += 300;
}

const scrollRight = () => {
    flowContainer.scrollLeft -= 300;
}

scrollLeftButton.onclick = scrollLeft
scrollRightButton.onclick = scrollRight