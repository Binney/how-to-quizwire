function duplicate() {
    var image = document.getElementById("target").innerHTML;
    var copies = document.getElementById("copies").value;
    document.getElementById("result").innerHTML = "";

    for (i = 1; i <= copies; i++) {
        document.getElementById("result").innerHTML += image;
    }
}