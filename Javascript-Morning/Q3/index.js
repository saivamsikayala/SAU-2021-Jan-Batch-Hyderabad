function addNumbers(){
    var value1 = document.getElementById("op1").value;
    var value2 = document.getElementById("op2").value;
    if(isNaN(value1) || isNaN(value2)){
        document.getElementById("result").innerHTML = (value1+value2);
    }
    else{
        document.getElementById("result").innerHTML = (parseInt(value1)+parseInt(value2));
    }
}