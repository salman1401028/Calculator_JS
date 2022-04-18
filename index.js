

displayArea = document.getElementById('display');
function isOperator(buttonText) {
    if (buttonText != 'DEL' || buttonText != 'CLR')

        if (buttonText == '-' || buttonText == '+' || buttonText == '*' || buttonText == '/' || buttonText == '%') {
            return true;
        }
        else {
            return false;
        }
}

function buttonClicked(buttonText) {
    if (buttonText != 'DEL' && buttonText != 'CLR' && buttonText != '=') {

        if (displayArea.innerText == '0') {
            if (buttonText !='0' && buttonText != '00') {
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
            if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText) || (displayArea.innerText[displayArea.innerText.length - 1]=='.') && (buttonText =='.')) {
                displayArea.innerText = displayArea.innerText.substring(0, displayArea.innerText.length - 1);
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
            displayArea.innerText = displayArea.innerText.substring(0, displayArea.innerText.length - 1);
        }
        else if (buttonText === '=') {
            displayArea.innerText = eval(displayArea.innerText);
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