window.onload = function() {
    initColorPicker();
};

function initColorPicker() {
    let colorPicker = document.getElementById("colorPicker");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };
    let colorPicker = document.getElementsByClassName("picker");
    setColorPickerEventListeners(ColorBox, rgb colorPickers);
}

function setColorPickerEventListeners(elements, colors,pickerElements){
    let pickerlen = pickerElements.length;
    for (let i = 0; i < pickerlen; i++) {
        pickerElements [i].addEventListener("change", () => {
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(elements, red, green, blue);
            setDisplayValues(red, green, blue);

        });
    }
}
function setElementBGColor(bgElement, red, green, blue) {
    let rgbVal =[red, green, blue]. join (',');
    bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innertext =red;
    greenVal.innertext = green;
    blueVal.innertext = blue;
}

//*
    rgb.red.addEventListener('change', function() => {
        console.log("Red value:", rgb.red.value);
    });
    rgb.green.addEventListener('change', function() => {
    console.log("Green value:", rgb.green.value);
    });
    rgb.blue.addEventListener('change', function() => {
        console.log("Blue value:", rgb.blue.value);
    });
}*//
