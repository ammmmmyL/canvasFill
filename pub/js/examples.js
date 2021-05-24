// original image
const original_img = document.getElementsByClassName("originalImg")[0];
const caption = document.getElementById("caption").innerHTML;

// slit image example
const split1 = splitImage.CreateSplitImage(original_img, caption, 500, 500, 0.7, 0.3)
document.getElementById("splitExample").appendChild(split1)

// circle image example
shapeImage.textBackground = "#f5f2f0"
const circle = shapeImage.CreateCircleImage(original_img, caption, 500, 500)
document.getElementById("circleExample").appendChild(circle)

// circular
shapeImage.textBackground = "#ffffff00"
const caption2 = caption + caption
const circular = shapeImage.CreateCircleImage2(original_img, caption2, 700, 300)
document.getElementById("circularExample").appendChild(circular)

// overlay image examples
overlayImage.backgroundColor = "#D5A5A7"
const overlay = overlayImage.CreateCaptionOverlay(original_img, caption, 700, 500)
document.getElementById("overlayExample1").appendChild(overlay)

const overlay2 = overlayImage.CreateCaptionOverlay2(original_img, caption, 700, 500, "left")
document.getElementById("overlayExample2").appendChild(overlay2)

overlayImage.backgroundColor = "#ffffff"
const overlay3 = overlayImage.CreateCaptionOverlay3(original_img, caption, 700, 500, "left")
document.getElementById("overlayExample3").appendChild(overlay3)

// Join image examples
orientation = "vertical"
joinImage.backgroundColor = "#D5A5A7"
joinImage.circleColor = "#a5bdd6dd"

const circleJoin = joinImage.CreateCircleInMiddle(original_img, caption, 400, 700, orientation)
document.getElementById("joinExample").appendChild(circleJoin)

orientation = "horizontal"
joinImage.fontColor = "whitesmoke"
joinImage.backgroundColor = "#5f6366dd"
joinImage.circleColor = "#D5A5A7cd"

const circleJoin2 = joinImage.CreateCircleInMiddle(original_img, caption, 700, 400, orientation)
document.getElementById("joinExample2").appendChild(circleJoin2)







