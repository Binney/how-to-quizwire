function demonstrateFor() {
    for (i = 1; i <= 10; i+=1) {
        document.getElementById("output0").innerHTML += i + "<br>";
    }
}

function demonstrate1() {
    document.getElementById("output2").innerHTML="";
    for (i = 5; i <= 10; i+=1) {
        document.getElementById("output1").innerHTML += i + "<br>";
    }
}

function demonstrate2() {
    document.getElementById("output2").innerHTML="";
    for (i = 1; i <= 5; i+=1) {
        document.getElementById("output2").innerHTML += i + "<br>";
    }
}

function demonstrate3() {
    document.getElementById("output2").innerHTML="";
    for (i = 1; i <= 10; i+=2) {
        document.getElementById("output3").innerHTML += i + "<br>";
    }
}

