const obstacle = document.getElementById('obstacle1')
const passage = document.getElementById('passage')
const bird = document.getElementById('bird')
let flap = 0

passage.addEventListener('animationiteration', () => {
    let holePosition = -((Math.random() * 550) + 200);
    passage.style.top = holePosition + 'px';
});

setInterval(function birdPosition() {
    const currentTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))
    const passageTop = parseInt(window.getComputedStyle(passage).getPropertyValue('top'))
    const nTop = -(775-currentTop)
    if ((currentTop >= 735)||((obstacleLeft<=50)&&(obstacleLeft>=-160)&&((nTop<passageTop)||(nTop
        >passageTop+725)))) {
        alert('Game Over')
        bird.style.top = 150 + 'px';
    }
    if (flap === 0 && currentTop <= 720) {
        bird.style.top = (currentTop + 15) + 'px';
    }
    // console.log(passageTop)
}, 30);


function fly() {
    let flap = 1;
    let flapCount = 0;
    const flapInterval = setInterval(function () {
        let currentTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
        if (currentTop > 30) {
            bird.style.top = (currentTop - 30) + 'px'
        };
        if (flapCount > 3) {
            clearInterval(flapInterval);
            flap = 0;
            flapCount = 0;
        }
        flapCount++;
    }
        , 30);
}

document.addEventListener('keypress', event => {
    if (event.code === 'Space') {
        fly()
    }
})

