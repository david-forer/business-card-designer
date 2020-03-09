function printCompany() {
    document.getElementById('outputCompany').innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById('outputMessage').innerHTML = inputMessage.value;
}

function changeBg() {
    var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeText() {
    var textColor = document.getElementById('inputText').value;
    document.getElementById('card').style.color = textColor;
}

function textAlign(selected_id) {
    document.getElementById('card').className = selected_id;

}
