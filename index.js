// 1
const hoursDispaly = document.getElementById("hours-timer-box");
const hoursBtn = document.getElementById("hours-timer-start");
let hoursTimer;

hoursBtn.addEventListener("click", () => {
    let totalTime = 1800;
    let halfTime = totalTime / 2;

    if (totalTime > 0) {
        clearInterval(hoursTimer);
        hoursTimer = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(hoursTimer);
                hoursDispaly.textContent = "The timer is over!";
            } else {        
                if (totalTime === halfTime) {
                    alert("Passed exactly the melt of time!");
                }
                totalTime --;
                let hours = Math.floor(totalTime / 3600);
                let min = Math.floor(totalTime / 60);
                let sec = totalTime % 60;
                hoursDispaly.textContent = `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
            }
        }, 1000);
    }
});

// 2
const secTimerBox = document.querySelector(".timer-sec");
const secondsDispaly = document.getElementById("seconds-timer-box");
const secondsBtn = document.getElementById("seconds-timer-start");
let secondsTimer;

secondsBtn.addEventListener("click", () => {
    secondsBtn.disabled = true;
    let totalTime = 30000;
    let halfTime = totalTime / 2;
    if (totalTime > 0) {
        clearInterval(secondsTimer);
        secTimerBox.classList.remove("end");
        secondsTimer = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(secondsTimer);
                secondsBtn.disabled = false;
                secondsDispaly.textContent = "The timer is over!";
            } else {        
                if (totalTime === halfTime) {
                    secTimerBox.classList.add("middle");
                }
                if (totalTime === halfTime * 0.30) {
                    secTimerBox.classList.remove("middle");
                    secTimerBox.classList.add("end");
                }
                totalTime -= 10;
                let ms = totalTime % 1000;
                let sec = Math.floor(totalTime / 1000);
                secondsDispaly.textContent = `${String(sec).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
            } 
        }, 10);
    }
});