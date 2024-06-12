var c = null;
var ogBackground;


window.onload = function () {
    var culoare_background_switch_state = false;

    ogBackground = getComputedStyle(document.body).backgroundColor;
    if (localStorage.getItem("culoare_background_switch_state") != null)
        culoare_background_switch_state = localStorage.getItem("culoare_background_switch_state") === 'true';

    // Call modifyBackground to set the initial background state based on stored value
    modifyBackground(culoare_background_switch_state);
}

function modifyBackground(state) {

    if (!state) {
        if (c != null) {
            clearInterval(c);
            document.body.style.backgroundColor = ogBackground;
        }
        return;
    }

    document.body.style.transition = "background-color 1s linear";

    c = setInterval(function () {
        let value = Math.floor(Math.random() * 32);             // O nuanta de gri
        document.body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
    }, 1000);
}