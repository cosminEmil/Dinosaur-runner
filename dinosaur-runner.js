let dinosaur = document.getElementById("dinosaur");
let seconds = 0;
let secondsCnt = document.getElementById("secondsCounter"); 

let resetStartPos = setInterval(function() {
    let obstacle1 = document.getElementById("obstacle1");
    let obstacle2 = document.getElementById("obstacle2");
    obstacle1.style.visibility = "hidden";
    movement(obstacle1, "1000px");
    movement(obstacle2, "1000px");
}, 15);

function movement(obstacle, startPoint) {
    obstacle.style.left = obstacle.offsetLeft - 2 +"px";
    if (obstacle.style.left <= "700px") {
        obstacle.style.visibility = "visible";
    } 
    if (obstacle.style.left < "300px") {
        obstacle.style.left = startPoint;
        obstacle.style.visibility = "hidden";
    }
}

document.addEventListener("keydown", (event) => {
    let direction = event.key;
    if (direction == " ") {
        dinosaur.style.top = dinosaur.offsetTop - 80 + "px";
    }
    if (dinosaur.style.top == "591px") {
        let movingDown = setInterval(function() {
            if (dinosaur.style.top < "671px") {
                dinosaur.style.top = dinosaur.offsetTop + 0.5 + "px";
            }
        }, 15);
    }
    
});

function areDivsTouching(obj1, obj2, obj3) {
    // Check collision
    if ((obj1.left < obj2.right && obj1.right > obj2.left && obj1.top < obj2.bottom && obj1.bottom > obj2.top)) {
        return 1;
    }

    if (obj1.left < obj3.right && obj1.right > obj3.left && obj1.top < obj3.bottom && obj1.bottom > obj3.top) {
        return 2;
    }
}

let reloadPageIfDivsTouch = setInterval(function() {
    let areDivsTouched = areDivsTouching(dinosaur.getBoundingClientRect(), obstacle1.getBoundingClientRect(), obstacle2.getBoundingClientRect());
    if (areDivsTouched) {
        alert("GAME OVER\nSCORE: " + seconds);
        obstacle1.style.left = "70%";
        obstacle2.style.top = "80%";
        window.location.reload();
        return 0;
    } 
}, 100);

let score = setInterval(function() { 
    ++seconds;
    secondsCnt.innerText = seconds;
}, 150);
