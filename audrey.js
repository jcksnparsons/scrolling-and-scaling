const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    const audreyWidthControl = window.scrollY / 3;
    const audreyHeightControl = window.scrollY / 4;

    if (audreyWidthControl < 150) {
        return '';
    } else {
        audrey.style.width = `${audreyWidthControl}px`;
    }
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    audrey.style.height = `${audreyHeightControl}px`;
})