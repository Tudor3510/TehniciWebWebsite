var c = null;
var ogBackground;

window.onload = function () {
    var culoare_background_switch_state = false;

    ogBackground = getComputedStyle(document.body).backgroundColor;
    if (localStorage.getItem("culoare_background_switch_state") != null)
        culoare_background_switch_state = localStorage.getItem("culoare_background_switch_state") === 'true';

    if (localStorage.getItem("planete_cazatoare_switch_state") != null){
        console.log("planete_cazatoare_switch_state este" + localStorage.getItem("planete_cazatoare_switch_state"));
        document.querySelector('.planete-cazatoare-switch > label > input').checked = localStorage.getItem("planete_cazatoare_switch_state") === 'true';
    }
    else{
        document.querySelector('.planete-cazatoare-switch > label > input').checked = false;
    }


    var culoare_background_switch = document.querySelector('.culoare-background-switch > label > input');
    culoare_background_switch.checked = culoare_background_switch_state;

    // Call modifyBackground to set the initial background state based on stored value
    modifyBackground(culoare_background_switch_state);

    culoare_background_switch.addEventListener('change', function () {
        culoare_background_switch_state = culoare_background_switch.checked;
        localStorage.setItem("culoare_background_switch_state", culoare_background_switch_state);

        modifyBackground(culoare_background_switch_state);
    });

    document.querySelector('.planete-cazatoare-switch > label > input').addEventListener('change', function() {
        localStorage.setItem("planete_cazatoare_switch_state", document.querySelector('.planete-cazatoare-switch > label > input').checked);
    });
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
