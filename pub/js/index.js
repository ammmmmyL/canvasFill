// data
// display image
const displayImg = new Image()
displayImg.src = "./../img/display.jpg"

// display caption
const displayCaption = "Life is full of Macarons"

// library examples
// size 
let width = 0.195 * window.innerWidth
let height = 0.27 * window.innerHeight

// carousel items
overlayImage.backgroundColor = "#ffffff"
overlayImage.fontSize = "11px"
const overlay2 = overlayImage.CreateCaptionOverlay2(displayImg, displayCaption, width, height)
overlay2.className = "displayContent"
document.getElementById("example1").appendChild(overlay2)

overlayImage.backgroundColor = "#4d6d9ac8"
overlayImage.fontSize = "26px"
overlayImage.fontStyle = "Futura"
overlayImage.fontColor = "whitesmoke"
const overlay = overlayImage.CreateCaptionOverlay(displayImg, displayCaption, width, height)
overlay.className = "displayContent"
document.getElementById("example2").appendChild(overlay)

overlayImage.fontSize = "30px"
const split1 = splitImage.CreateSplitImage(displayImg, displayCaption, width, height, 0.3, 0.7)
split1.className = "displayContent"
document.getElementById("example3").appendChild(split1)