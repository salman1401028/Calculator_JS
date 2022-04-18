
/*
displayArea = document.getElementById('display');
function isOperator(buttonText) {
    if (displayArea.innerText.length >= 24) {
        return;
    }
    if (buttonText != 'DEL' || buttonText != 'CLR' || buttonText != '=') {
        if (buttonText == '-' || buttonText == '+' || buttonText == '*' || buttonText == '/' || buttonText == '%') {
            return true;
        }
        else {
            return false;
        }
    }
}

function buttonClicked(buttonText) {
    if (buttonText != 'DEL' && buttonText != 'CLR' && buttonText != '=') {

        if (displayArea.innerText == '0') {
            if (buttonText != '0' && buttonText != '00') {
                if (isOperator(buttonText) || buttonText == '.') {
                    displayArea.innerText = displayArea.innerText + buttonText;
                }
                else {
                    displayArea.innerText = buttonText;
                }

            }

        }
        else {
            //leave
            if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText) || (displayArea.innerText[displayArea.innerText.length - 1] == '.') && (buttonText == '.')) {
                displayArea.innerText = displayArea.innerText.slice(0,- 1);
                displayArea.innerText = displayArea.innerText + buttonText;
            }
            else {
                displayArea.innerText = displayArea.innerText + buttonText;
            }

        }

    }
    else {
        if (buttonText == 'CLR') {
            displayArea.innerText = '0';
        }
        else if (buttonText == 'DEL') {
            displayArea.innerText = displayArea.innerText.slice(0,- 1);
        }
        else if (buttonText === '=') {
            displayArea.innerText = eval(displayArea.innerText);
        }
    }

}*/



displayArea = document.getElementById('display');
function isOperator(buttonText) {
    if (displayArea.innerText.length >= 24) {
        return;
    }
    if (buttonText != 'DEL' || buttonText != 'CLR' || buttonText != '=') {
        if (buttonText == '-' || buttonText == '+' || buttonText == '*' || buttonText == '/' || buttonText == '%') {
            return true;
        }
        else {
            return false;
        }
    }
}

function buttonClicked(buttonText) {
    if (buttonText == 'CLR') {
        displayArea.innerText = '0';
        return;
    }

    if (buttonText == 'DEL') {
        displayArea.innerText = displayArea.innerText.slice(0, -1);
        return;
    }

    if (buttonText == '=') {
        displayArea.innerText = eval(displayArea.innerText);
        return;
    }

    if (displayArea.innerText === '0') {
        if (buttonText == '0' || buttonText == '00') {
            return;
        }
        if (buttonText == '.' || isOperator(buttonText)) {
            displayArea.innerText = displayArea.innerText + buttonText;
            return;
        }
        displayArea.innerText = buttonText;
    }
    else {
        if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText) || (displayArea.innerText[displayArea.innerText.length - 1] == '.') && (buttonText == '.')) {
            displayArea.innerText = displayArea.innerText.slice(0, - 1);
            displayArea.innerText = displayArea.innerText + buttonText;
            return;
        }
        else {
            displayArea.innerText = displayArea.innerText + buttonText;
        }

    }
}








    

/*
displayArea= document.getElementById('display');

function buttonClicked(buttonText){
    if(displayArea.innerText == '0')
    {
        if(displayArea.innerText == isOperator(buttonText) || displayArea.innerText == '.')
        {
            displayArea.innerText= displayArea.innerText + buttonText;
        }
        else
        {
            displayArea.innerText= buttonText;
        }
    }
    else
    {
        displayArea.innerText= displayArea.innerText + buttonText;
    }
    
}
*/