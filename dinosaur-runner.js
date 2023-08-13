let interval = setInterval(function() {
    let obstacle1 = document.getElementById("obstacle1");
    let obstacle2 = document.getElementById("obstacle2");
    movement(obstacle1, "900px");
    if (obstacle1.style.left < "400px") {
        movement(obstacle2, "1000px");
    }
    
}, 10);

function movement(obstacle, startPoint) {
    obstacle.style.left = obstacle.offsetLeft - 2 +"px";
    if (obstacle.style.left < "170px") {
        obstacle.style.left = startPoint;
    }
}
