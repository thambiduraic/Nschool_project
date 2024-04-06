function myFunction() {
    document.getElementById("feedback-form").style.display = "block";
}
function closeNav() {
    document.getElementById("feedback-form").style.display = "none";
}


// let count = 0;
// let interval = setInterval(function(){
//     count += 1;
//     if(count === 100){
//         clearInterval(interval);
//     }
//     console.log(count);
// }, 500);


function fun1() {
    var count = 0;
    
    setInterval(function () {
        count += 1;
        if(count === 100){
            clearInterval(interval);
        }
        document.getElementById("view").innerHTML = count;
    },100);
}

var addFunctionOnWindowLoad = function (callback) {
    if (window.addEventListener) {
        window.addEventListener('load', callback, false);
    } else {
        window.attachEvent('onload', callback);
    }
}

addFunctionOnWindowLoad(fun1);

