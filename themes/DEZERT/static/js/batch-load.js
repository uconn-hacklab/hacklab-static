// Credit Rohan Menon <rohanmenon.com>

// Taken from https://stackoverflow.com/questions/11071314/
// Triggers when all the batch-loaded images have finished loading
Promise.all(Array.from(document.querySelectorAll('.batch-load'))
.filter(img => !img.complete).map(img => new Promise(resolve => {
    img.onload = img.onerror = resolve;
}))).then(() => {
    setImageOpacity(1)   // Makes the images visible
});

// If it's taken 2.5s and the images haven't finished loading, 
// just show whatever we have
setTimeout(function() {
    setImageOpacity(1)   // Makes the images visible
}, 2500);

function setImageOpacity(opacity) {
    document.querySelectorAll('.batch-load').forEach(function(image) {
        image.style.opacity = opacity;
        image.parentNode.style.backgroundColor = "transparent";
        image.parentNode.style.animation = "fadeOut 0.4s";
    });
}
