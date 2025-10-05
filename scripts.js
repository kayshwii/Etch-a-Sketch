//node selectors
let container = document.querySelector('.container');
let sizeButton = document.querySelector('#setSize')
let setDark = document.querySelector('#darkMode')
let setShade = document.querySelector('#shadeMode')
let setRGB = document.querySelector('#rgbMode')

//mode setting
let mode = 'darkMode'

let modeSet = e => {
    console.log(e.target.id)
    mode = e.target.id
}

setDark.addEventListener('click', modeSet)
setShade.addEventListener('click', modeSet)
setRGB.addEventListener('click', modeSet)

//color handling
let color = e => {
    if (mode === 'darkMode') {
        e.target.style.backgroundColor = 'black'
        e.target.style.opacity = '100%'

    } else if (mode === 'shadeMode') {
        let count = parseInt(e.target.dataset.enters) + 10
        e.target.dataset.enters = count
        e.target.style.backgroundColor = 'black'
        e.target.style.opacity = `${count}%`
    } else {
        let rgbValue = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        e.target.style.backgroundColor = rgbValue
        e.target.style.opacity = '100%'
    }
}

//grid generating
sizeButton.addEventListener('click', () => {
    gridSize = ''
    console.log(gridSize)
    let userVal = prompt('Set the x and y to a number between 1 and 100')
    gridSize = userVal === null
    || userVal === ''
    || userVal > 100
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
        box.addEventListener('mouseenter', color)

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