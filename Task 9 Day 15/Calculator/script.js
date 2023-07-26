
function display(val) {
    document.getElementById("result").value += val;

}

function operation()
{
    let res=eval(document.getElementById("result").value);
   document.getElementById("result").value =res;
}

function Clear() {
    var inp = document.getElementById('result');
    inp.value = '';
}