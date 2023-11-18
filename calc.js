
    function adds(){
        var x,y,z;
        x=Number(document.getElementById("no1").value);
        y=Number(document.getElementById("no2").value);
        z=x+y;
        document.getElementById("results").value=z;

    }
function multiply(){
    var x,y,z;
    x=Number(document.getElementById("no1").value);
    y=Number(document.getElementById("no2").value);
    z=x*y;
    document.getElementById("results").value=z;
}
function divide(){
    var x,y,z;
    x=Number(document.getElementById("no1").value);
    y=Number(document.getElementById("no2").value);
    z=x/y;
    document.getElementById("results").value=z;
}
function minus(){
    x=Number(document.getElementById("no1").value);
    y=Number(document.getElementById("no2").value);
    z=x-y;
    document.getElementById("results").value=z;
}