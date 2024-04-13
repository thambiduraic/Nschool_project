document.addEventListener("DOMContentLoaded", function () {
  // Get all the list items
  var listItems = document.querySelectorAll("a");

  // Add click event listener to each list item
  //     listItems.forEach(function(listItem) {
  //         listItem.addEventListener('click', function() {
  //             // Remove the 'active' class from the current active list item

  //             var career_url = document.getElementById("career").href
  //             var newurl =  window.location.pathname

  //             // var pathArray = window.location.pathname.split('/');

  //             // var secondLevelLocation = pathArray[1];

  //             if (career_url !== newurl) {
  //                 career_url.classList.remove('active');
  //             }

  //             career_url.classList.add('active');

  //             // var currentActive = document.querySelector('a.active');
  //             // if (currentActive) {
  //             //     currentActive.classList.remove('active');
  //             // }

  //             // Add the 'active' class to the clicked list item
  //             // listItem.classList.add('active');
  //         });
  //     });
});

document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname.split("/");
  currentPath = currentPath[2];
  console.log(currentPath);

  var anchors = document.querySelectorAll(".nav-item .nav-link");
  console.log(anchors)

  document.querySelectorAll(".nav-item .nav-link").forEach(function (activeAnchor) {
    activeAnchor.classList.remove("active");
    console.log("active remove")
  });

  anchors.forEach(function (anchor) {
    var anchorPath = new URL(anchor.href).pathname.split("/");
    anchorPath = anchorPath[2];
    console.log(anchorPath);
    console.log(currentPath);

    if (anchorPath === currentPath) {
      anchor.classList.add("active");
      console.log("activate success");
    }
    // else{
    //     anchor.classList.remove("active");
    // }
  });
});

function myFunction() {
  document.getElementById("feedback-form").style.display = "block";
}
function closeNav() {
  document.getElementById("feedback-form").style.display = "none";
}

function fun1() {
    var elements = document.querySelectorAll("[id='view']");
    var count = 0;
    elements.forEach(function(element) {
        var interval = setInterval(function () {
            count += 1;
            if(count === 50){
                clearInterval(interval);
            }
            element.innerHTML = count
        },100);
    });
}

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


