//node selectors
let container = document.querySelector('.container');
let sizeButton = document.querySelector('.setSize')

//event listeners
let highlight = e => {
    e.target.style.backgroundColor = 'black';
}

let shade = e => {
    let count = parseInt(e.target.dataset.enters) + 10
    e.target.dataset.enters = count
    console.log(count)
    e.target.style.backgroundColor = 'black'
    e.target.style.opacity = `${count}%`
}




sizeButton.addEventListener('click', () => {
    gridSize = ''
    console.log(gridSize)
    let userVal = prompt('Well?')
    gridSize = userVal === null
    || userVal === ''
    || userVal > 99
    || userVal < 0
    || isNaN(userVal) ? 16 : userVal
    buildCanvas(gridSize)
})

let buildCanvas = (gridSize = 16) => {
    //reset container
    container.innerHTML = ''

    //set the height/width of the flex childre
    boxSize = 800 / gridSize

    //set the number of boxes
    for (let i = 0; i < gridSize * gridSize; i++) {
        let box = document.createElement('div');
        box.style.width = `${boxSize}px`
        box.style.height = `${boxSize}px`
        box.classList.add('box')

        //track mouse entries into box
        box.dataset.enters = 0
        box.addEventListener('mouseenter', (shade))

        container.appendChild(box)
    }
}

buildCanvas()


//obsolete but i thought i was cooking
// for (let i = 1; i <= 16; i++) {
//     let x = document.createElement('div')
//     x.classList.add('column')
//     container.appendChild(x)
//     for (let j = 1; j <= 16; j++) {
//         let y = document.createElement('div')
//         y.classList.add('box')
//         y.addEventListener('mouseover', highlight)
//         x.appendChild(y)
//     }
// }