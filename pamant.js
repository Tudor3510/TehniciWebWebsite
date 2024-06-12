var c = null;
var ogBackground;

var isAnimated = false

var style = document.createElement('style')
var keyframes = `
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
style.innerHTML = keyframes;


var originalScale;

document.addEventListener('keydown', function(event){
    
    
    if (event.key == 'a' || event.key == 'A'){
        console.log("Butonul a a fost apasat");
        isAnimated = !isAnimated;
    }
    else
        return

    if (isAnimated){
        console.log("E animat");

        document.getElementsByTagName('head')[0].appendChild(style);
        let element = document.querySelector('#planete a figure img');
        element.style.animation = 'rotate 2s linear infinite';

        originalScale = getComputedStyle(document.documentElement).getPropertyValue('--original-scale');
        document.documentElement.style.setProperty('--original-scale', '1')

    }
    else{
        console.log("Nu mai e animat");

        let element = document.querySelector('#planete a figure img');
        element.style.animation = '';

        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }


        document.documentElement.style.setProperty('--original-scale', originalScale);
    }
});





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
