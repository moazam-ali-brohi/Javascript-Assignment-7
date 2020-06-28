

function getInputv(num){
    var inputResult = document.getElementById("result");
    inputResult.value += num;
}

function clearInput(){
    var inputResult = document.getElementById("result");
    inputResult.value = "";
}

function getInputResult(){
    var inputResult = document.getElementById("result");
    inputResult.value = eval(inputResult.value)
    
}