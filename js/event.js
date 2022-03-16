function makeRed(){
    document.body.style.backgroundColor = "salmon";

}   
    const blueButton = document.getElementById("make-blue-button");
    function makeBlue(){
    document.body.style.backgroundColor ="lightblue";
    }
    blueButton.onclick = makeBlue;


    var greenButton = document.getElementById("make-green-button");
        greenButton.onclick = function makeGreen(){
        document.body.style.backgroundColor = "green";
    }