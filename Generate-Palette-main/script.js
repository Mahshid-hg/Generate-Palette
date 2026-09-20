const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

// event listener
generateBtn.addEventListener("click", generatePalette);

// paletteContainer.addEventListener()
paletteContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-copy")) {

        const hexValue = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue);
        showCopySuccess(e.target);

    }else if (e.target.classList.contains("color")) {

        const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
        navigator.clipboard.writeText(hexValue);
        showCopySuccess(e.target.nextElementSibling.querySelector("i"));

    }
})

// functions
function showCopySuccess(icon) {
    icon.className = "fa-solid fa-check";
    console.log(icon);
    setTimeout(() => {
        icon.className = "fa-regular fa-copy";
        console.log(icon);
    }, 1500);
}

function generatePalette() {
    let colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function updatePaletteDisplay(colors) {
    const colorBox = [...document.querySelectorAll(".color-box")];

    colorBox.forEach((value, index) => {
        const color = colors[index];
        const colorDiv = value.querySelector(".color");
        const colorInfo = value.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        colorInfo.innerHTML = color;
    })

}