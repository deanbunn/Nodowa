
function paDean(){
    let vDean = "Getting ready for dinner";
    vDean = "Let's change it again";
    document.getElementById("pDean").innerHTML = vDean;
}

function paTeas(){
    const teas = [];
    teas[0] = "Jasmin";
    teas[1] = "Black";
    teas[2] = "Green";
    document.getElementById("pDean").innerHTML = teas;
}

function paCups(){

    const cup = {material:"ceramic", color:"green", handle:"wooden"};

    document.getElementById("pDean").innerHTML = cup.handle;

}