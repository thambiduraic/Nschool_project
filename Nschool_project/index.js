function myFunction() {
    document.getElementById("feedback-form").style.display = "block";
}
function closeNav() {
    document.getElementById("feedback-form").style.display = "none";
}


// function fun1() {
//     var elements = document.querySelectorAll("[id='view']");
//     var count = 0;
//     elements.forEach(function(element) {
//         var interval = setInterval(function () {
//             count += 1;
//             if(count === 50){
//                 clearInterval(interval);
//             }
//             element.innerHTML = count
//         },100);
//     });
// }

function fun1() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 12){
            clearInterval(interval);
        }
        document.getElementById("view").innerHTML = count + "+";
    },100);
}

function fun2() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 25){
            clearInterval(interval);
        }
        document.getElementById("view1").innerHTML = count + "+";
    },100);
}

function fun3() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 50){
            clearInterval(interval);
        }
        document.getElementById("view2").innerHTML = count + "+";
    },100);
}

function fun4() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 10){
            clearInterval(interval);
        }
        document.getElementById("view3").innerHTML = count + "+";
    },100);
}

function fun5() {
    var count = 0;
    
    var interval = setInterval(function () {
        count += 1;
        if(count === 1000){
            clearInterval(interval);
        }
        document.getElementById("view4").innerHTML = count + "+";
    },10);
}

var addFunctionOnWindowLoad = function (callback) {
    if (window.addEventListener) {
        window.addEventListener('load', callback, false);
    } else {
        window.attachEvent('onload', callback);
    }
}

addFunctionOnWindowLoad(fun1);

addFunctionOnWindowLoad(fun2);

addFunctionOnWindowLoad(fun3);

addFunctionOnWindowLoad(fun4);

addFunctionOnWindowLoad(fun5);

