let body = document.querySelector('body');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (button.innerHTML == "Off") {
        button.innerHTML = "On";
        body.style.background = 'black'; 
        button.style = 'color: black; background: white;'
    } else if (button.innerHTML == "On") {
        button.innerHTML = "Off";
        body.style.background = 'white'; 
        button.style = ' box-shadow: none;'
    }
});
