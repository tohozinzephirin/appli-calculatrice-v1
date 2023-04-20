let operator = null,
    premierChiffre = null,
    deuxiemeChiffre = null,
    screen = document.getElementById('screen');

function calculate(buttonValue) {
    if (buttonValue === 'sqrt') {
        screen.innerHTML = Math.sqrt(parseFloat(screen.innerHTML));
        premierChiffre = parseFloat(screen.innerHTML);
        operator = null;
        deuxiemeChiffre = null;
    } else if (buttonValue === 'sq') {
        screen.innerHTML = parseFloat(screen.innerHTML) * parseFloat(screen.innerHTML);
        operator = null;
        deuxiemeChiffre = null;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        premierChiffre = parseFloat(screen.innerHTML);
        operator = buttonValue;
        screen.innerHTML = '';
    } else if (buttonValue === '=') {
        if (premierChiffre != null && operator != null) {
            deuxiemeChiffre = parseFloat(screen.innerHTML);
            if (operator === '+') {
                screen.innerHTML = premierChiffre + deuxiemeChiffre;
            } else if (operator === '-') {
                screen.innerHTML = premierChiffre - deuxiemeChiffre;
            } else if (operator === '*') {
                screen.innerHTML = premierChiffre * deuxiemeChiffre;
            } else if (operator === '/') {
                screen.innerHTML = premierChiffre / deuxiemeChiffre;
            }
            premierChiffre = null;
            operator = null;
            deuxiemeChiffre = null;
        }
    }else {
        screen.innerHTML += buttonValue
    }
}
// Ecrivez la difference entre les operateurs == et ===
//donnez leurs cas d'utilisation
function effacer(){
    document.getElementById("screen").innerHTML = "";
    premierChiffre = null;
    operator = null;
    deuxiemeChiffre = null;
}