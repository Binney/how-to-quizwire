function writeMessage(message) {
    var messages = document.getElementById("messages");
    messages.innerHTML += message;
    messages.innerHTML += "<br/>";
}

function checkPassword() {
    writeMessage("Yes, that's a password");
    var password = document.getElementById("password").value;
    if (password === "swordfish") {
        writeMessage(password + " is correct!");
    } else {
        writeMessage(password + " is wrong");
    }
}
