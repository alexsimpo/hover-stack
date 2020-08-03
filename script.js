const images = document.querySelectorAll('.image');

let left = 500;

images.forEach(image => {
    image.style.cssText = `
    background-color: rgb(${randomValue()},${randomValue()},${randomValue()});
    left: ${left}px`;
    left -= 100;
});

function randomValue() {
    return Math.random() * 250;
}