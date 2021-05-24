// CanvasFill Library
"use strict";

(function (global, document, $) {

    /* Private properties and functions */
    // function to create a wrapped caption
    function ReturnWrappedCaption(caption, textBoxWidth) {
        console.log("In Wrapped Caption")
        console.log(caption)

        let words = caption.split(" ");
        let wrappedText = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            let word = words[i];
            let textwidth = word.clientWidth;

            console.log(textwidth)
            if (textwidth < textBoxWidth) {
                currentLine += " " + word;
            } else {
                wrappedText.push(currentLine);
                currentLine = word;
            }
        }
        // append the last line
        wrappedText.push(currentLine);

        return wrappedText;
    }

    function ConvertToPx(number) {
        return number + "px"
    }
    /* End of private properties/functions */

    /****** IMAGE FUNCTIONS ******/
    function CreateSplitImage(img, caption, width, height, left, right) {
        //console.log("In split Image")
        // create the canvas 
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // image portion
        const img_1 = new Image(width, height * 0.8)
        img_1.src = img.src

        let imgDiv_1 = document.createElement("div");
        const leftPortion = left - 0.05
        imgDiv_1.style.width = ConvertToPx(width * leftPortion)
        imgDiv_1.style.overflow = "hidden";
        imgDiv_1.style.position = "absolute"
        imgDiv_1.style.marginRight = ConvertToPx(width * 0.1)
        imgDiv_1.appendChild(img_1)

        const img_2 = new Image(width, height * 0.8)
        img_2.src = img.src
        img_2.style.marginLeft = ConvertToPx(-width * left)

        let imgDiv_2 = document.createElement("div");
        imgDiv_2.style.width = ConvertToPx(width * right)
        imgDiv_2.style.overflow = "hidden";
        imgDiv_2.style.position = "absolute"
        imgDiv_2.style.marginLeft = ConvertToPx(width * left)
        imgDiv_2.appendChild(img_2)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.style.width = ConvertToPx(width);
        textDiv.style.height = ConvertToPx(height * 0.2);
        textDiv.textContent = caption
        textDiv.style.backgroundColor = this.textBackground
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;
        textDiv.style.position = "absolute"
        textDiv.style.justifyContent = "center"
        textDiv.style.textAlign = "left"
        textDiv.style.marginTop = ConvertToPx(height * 0.8)
        textDiv.style.padding = "5px"
        textDiv.style.overflow = "auto"

        // add individual element to canvas
        canvas.appendChild(imgDiv_1)
        canvas.appendChild(imgDiv_2)
        canvas.appendChild(textDiv)

        return canvas;
    }

    function CreateCircleImage(img, caption, width, height) {
        //console.log("In circle Image")
        // create the canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // image portion
        let newImg = new Image(width, height)
        newImg.src = img.src
        newImg.style.borderRadius = "50%";
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.textContent = caption
        textDiv.style.backgroundColor = this.textBackground
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;
        textDiv.style.position = "absolute"
        textDiv.style.textAlign = "left"
        textDiv.style.top = ConvertToPx(height * 0.6)
        textDiv.style.left = ConvertToPx(width * 0.5)
        textDiv.style.padding = "5px"

        // append image child element to canvas
        canvas.appendChild(imgDiv)

        // text click on function
        let status = "hide"
        canvas.addEventListener('click', function (event) {
            if (status === "hide") {
                status = "show"
            }
            else {
                status = "hide"
            }

            if (status === "show") {
                canvas.appendChild(textDiv)
            }
            else {
                canvas.removeChild(textDiv)
            }
        });

        //console.log(canvas)
        return canvas;
    }

    function CreateCircleImage2(img, caption, width, height) {
        console.log("In circle2 Image")
        // create the canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.backgroundColor = this.textBackground
        canvas.style.position = "relative"

        // image portion
        let newImg = new Image()
        newImg.src = img.src
        newImg.style.borderRadius = "50%";
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("p");
        textDiv.textContent = caption
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;

        // append child element to canvas
        canvas.appendChild(imgDiv)
        canvas.appendChild(textDiv)

        newImg.style.width = ConvertToPx(height)
        newImg.style.height = ConvertToPx(height)
        imgDiv.style.shapeOutside = "circle(50% at 50% 50%)"
        imgDiv.style.float = "left"
        imgDiv.style.marginRight = "30px"
        imgDiv.style.width = ConvertToPx(height)
        imgDiv.style.height = ConvertToPx(height)

        textDiv.style.height = ConvertToPx(height)
        textDiv.style.textAlign = "left"
        textDiv.style.paddingTop = "30px"
        textDiv.style.paddingBottom = "30px"
        textDiv.style.paddingLeft = "5px"
        textDiv.style.paddingRight = "5px"

        //console.log(canvas)
        return canvas;
    }

    function CreateCaptionOverlay(img, caption, width, height) {
        //console.log("In overlay")

        // create the overall canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // background portion
        canvas.style.backgroundColor = this.backgroundColor;

        // image portion
        const offset = Math.min(width * 0.05, height * 0.05)
        let newImg = new Image(width * 0.7, height - 2 * offset)
        newImg.src = img.src
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.textContent = caption

        // append child element to canvas
        canvas.appendChild(imgDiv)
        canvas.appendChild(textDiv)

        // image styles   
        imgDiv.style.textAlign = "left"
        imgDiv.style.paddingTop = ConvertToPx(offset)
        imgDiv.style.paddingLeft = ConvertToPx(offset)
        imgDiv.style.paddingBottom = ConvertToPx(offset)

        // text styles
        textDiv.style.position = "absolute"
        textDiv.style.textAlign = "left"
        textDiv.style.top = ConvertToPx(height * 0.7);
        textDiv.style.maxHeight = ConvertToPx(height * 0.3 - offset);
        textDiv.style.left = ConvertToPx(width * 0.5);
        textDiv.style.marginLeft = ConvertToPx(width * 0.05);
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;
        textDiv.style.overflow = "hidden"

        //console.log(canvas)
        return canvas;
    }

    function CreateCaptionOverlay2(img, caption, width, height, position) {
        //console.log("In overlay")

        // create the overall canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // image portion
        let newImg = new Image(width, height)
        newImg.src = img.src
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.textContent = caption

        // append child element to canvas
        canvas.appendChild(imgDiv)
        canvas.appendChild(textDiv)

        // text styles
        textDiv.style.position = "absolute"
        textDiv.style.backgroundColor = this.backgroundColor + "cd";
        textDiv.style.textAlign = "left"
        textDiv.style.top = ConvertToPx(height * 0.15);
        textDiv.style.padding = ConvertToPx(width * 0.02);
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;
        textDiv.style.fontSize = this.fontSize

        textDiv.style.maxHeight = ConvertToPx(height * 0.4);
        textDiv.style.overflowY = "auto"

        if (position === "left") {
            textDiv.style.left = ConvertToPx(width * 0.05);
            textDiv.style.marginRight = ConvertToPx(width * 0.6);
        }

        else {
            textDiv.style.left = ConvertToPx(width * 0.6);
            textDiv.style.marginRight = ConvertToPx(width * 0.05);
        }

        /*textDiv.style.border = "solid red 2px"*/
        //console.log(canvas)
        return canvas;
    }

    function CreateCaptionOverlay3(img, caption, width, height, position) {
        //console.log("In overlay")

        // create the overall canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // image portion
        let newImg = new Image(width, height)
        newImg.src = img.src
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.textContent = caption

        // append child element to canvas
        canvas.appendChild(imgDiv)
        canvas.appendChild(textDiv)

        // text styles
        textDiv.style.position = "absolute"
        textDiv.style.height = "100%"
        textDiv.style.backgroundColor = this.backgroundColor + "aa";
        textDiv.style.textAlign = "left"
        textDiv.style.top = 0;
        textDiv.style.padding = ConvertToPx(width * 0.02);
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;
        textDiv.style.fontSize = this.fontSize
        textDiv.style.overflowY = "auto"
        textDiv.style.display = "flex";
        textDiv.style.justifyContent = "center"
        textDiv.style.alignItems = "center"

        if (position === "left") {
            textDiv.style.left = 0;
            textDiv.style.marginRight = ConvertToPx(width * 0.65);
        }

        else {
            textDiv.style.left = ConvertToPx(width * 0.65);
        }

        return canvas;
    }

    function CreateCircleInMiddle(img, caption, width, height, orientation) {
        //console.log("In overlay")

        // create the overall canvas
        let canvas = document.createElement("div");
        canvas.style.width = ConvertToPx(width);
        canvas.style.height = ConvertToPx(height);
        canvas.style.position = "relative"

        // image portion
        let newImg = new Image()
        newImg.src = img.src
        let imgDiv = document.createElement("div");
        imgDiv.appendChild(newImg)

        // text portion
        let textDiv = document.createElement("div");
        textDiv.textContent = caption

        // circle portion
        let circleDiv = document.createElement("div");

        // append child element to canvas
        canvas.appendChild(imgDiv)
        canvas.appendChild(textDiv)
        canvas.appendChild(circleDiv)

        if (orientation === "vertical") {
            newImg.style.width = ConvertToPx(width)
            newImg.style.height = ConvertToPx(height * 0.7)

            // styles
            circleDiv.style.width = ConvertToPx(width * 0.3)
            circleDiv.style.height = ConvertToPx(width * 0.3)
            circleDiv.style.position = "absolute"
            circleDiv.style.top = ConvertToPx(height * 0.7 - width * 0.15)
            circleDiv.style.marginLeft = ConvertToPx(width * 0.35)
            circleDiv.style.background = this.circleColor
            circleDiv.style.borderRadius = "50%"

            textDiv.style.height = ConvertToPx(height * 0.3)
            textDiv.style.paddingTop = ConvertToPx(width * 0.15)
        }
        else {
            // image portion
            newImg.style.width = ConvertToPx(width * 0.7)
            newImg.style.height = ConvertToPx(height)
            imgDiv.style.position = "absolute"
            imgDiv.style.left = 0

            // styles
            circleDiv.style.width = ConvertToPx(height * 0.25)
            circleDiv.style.height = ConvertToPx(height * 0.25)
            circleDiv.style.position = "absolute"
            circleDiv.style.top = ConvertToPx(height * 0.5 - height * 0.125)
            circleDiv.style.marginLeft = ConvertToPx(width * 0.7 - height * 0.125)
            circleDiv.style.background = this.circleColor
            circleDiv.style.borderRadius = "50%"

            textDiv.style.height = ConvertToPx(height)
            textDiv.style.width = ConvertToPx(width * 0.3)
            textDiv.style.position = "absolute"
            textDiv.style.left = ConvertToPx(width * 0.7)
            textDiv.style.paddingLeft = ConvertToPx(width * 0.1)
            textDiv.style.textAlign = "left"
            textDiv.style.display = "flex";
            textDiv.style.justifyContent = "center"
            textDiv.style.alignItems = "center"
            textDiv.style.overflow = "hidden"
        }

        textDiv.style.backgroundColor = this.backgroundColor;
        textDiv.style.fontFamily = this.fontStyle;
        textDiv.style.color = this.fontColor;

        return canvas
    }

    // objects to call
    const splitImage = {
        CreateSplitImage,
        fontStyle: "Helvetica",
        fontColor: "black",
        textBackground: "#ffffff00"
    }

    // crop images into different shapes
    const shapeImage = {
        CreateCircleImage,
        CreateCircleImage2,
        fontStyle: "Helvetica",
        fontColor: "black",
        textBackground: "white"
    }

    const overlayImage = {
        CreateCaptionOverlay,
        CreateCaptionOverlay2,
        CreateCaptionOverlay3,
        fontSize: "16px",
        fontStyle: "Helvetica",
        fontColor: "black",
        backgroundColor: "#ffffff"
    }

    const joinImage = {
        CreateCircleInMiddle,
        fontStyle: "Helvetica",
        fontColor: "black",
        backgroundColor: "#ffffff",
        circleColor: "#99ced3"
    }
    // add to the window object
    global.splitImage = global.splitImage || splitImage
    global.shapeImage = global.shapeImage || shapeImage
    global.overlayImage = global.overlayImage || overlayImage
    global.joinImage = global.joinImage || joinImage

})(window, window.document);