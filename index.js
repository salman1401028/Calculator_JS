displayArea = document.getElementById('display');
function isOperator(buttonText) {
    if (buttonText == '-' || buttonText == '+' || buttonText == '*' || buttonText == '/' || buttonText == '%') {
        return true;
    }
    else {
        return false;
    }
}

function buttonClicked(buttonText) {
    if (displayArea.innerText == '0') {
        if (buttonText != '00') {
            if (displayArea.innerText == isOperator() || displayArea.innerText == '.') {
                displayArea.innerText = displayArea.innerText + buttonText;
            }
            displayArea.innerText = buttonText;
        }

    }
    else {
        if(isOperator(displayArea.innerText[displayArea.innerText.length -1]) && isOperator(buttonText)) //This will check if there 
        {                                                                               //are multiple operators entered by user,
            displayArea.innerText= displayArea.innerText.substring(0,displayArea.innerText.length-1);      // if found then it will delete the previous one.
            displayArea.innerText= displayArea.innerText + buttonText;
        }
        else{
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