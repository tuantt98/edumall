document.addEventListener("DOMContentLoaded",function(){

    var x1 = document.getElementById('n1');
    console.log(x1);
    x1.onclick = function(){
        console.log('Hello world');
        x1.classList.add('dixuong');
    }
},false);