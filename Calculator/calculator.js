function input(parameter1) {
    var prev = document.getElementById("screen").value;
    if (prev == null || prev == '') {
        prev = '';
    }
    curr = prev + parameter1;
    //document.getElementById("demo").innerHTML = curr;
    document.getElementById("screen").value = curr;
}

function clear() {  
    //alert("clear");
    curr = "";
    document.getElementById("screen").value = curr;
    //document.getElementById("demo").innerHTML = curr;
}

function cl() {
    clear();
}

function calculate() {
    try {
        curr = eval(document.getElementById("screen").value);
    }
    catch(e) {
        alert("Error");
        curr = "0"
    }
    document.getElementById("screen").value = curr;
    //document.getElementById("demo").innerHTML = curr;
}