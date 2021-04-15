var correctButton = 0
var buttonNumber = 0

function generateButtons() {
    buttonNumber = $('#buttonNumber').val()
    correctButton = Math.floor((Math.random() * buttonNumber) + 1)
    for (var buttonIndex = 1; buttonIndex <= buttonNumber; buttonIndex++) {
        $('#buttonGrid').append(`
            <button id="` + buttonIndex + `" class="btn btn-secondary mt-2" type="button" onclick="showMessage(this.id)">
            Button #` + buttonIndex + `</button>
        `)
    }
    document.getElementById("start").disabled = true
}

function showMessage(clickedId) {
    if (clickedId == correctButton) {
        document.getElementById("message").innerHTML = "You win! Reload the page to restart the game."
        document.getElementById("message").style.color = "green"
        for (var buttonIndex = 1; buttonIndex <= buttonNumber; buttonIndex++) {
            document.getElementById(buttonIndex).disabled = true
        }
    } else {
        document.getElementById("message").innerHTML = "Wrong button. Try again!"
        document.getElementById("message").style.color = "red"
    }
}