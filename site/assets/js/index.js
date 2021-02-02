//Flash Sale Timer
const second = 1000
const minute = second * 60
const hour = minute * 60

const countDown = new Date("jan 25, 2021 09:00:00").getTime()
const x = setInterval(function() {
const now = new Date().getTime()
const distance = countDown - now

document.getElementById("countdown-hours").innerText = Math.floor(distance / (hour)),
document.getElementById("countdown-minutes").innerText = Math.floor((distance % (hour)) / (minute)),
document.getElementById("countdown-seconds").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
	clearInterval(x);
	}
	//seconds
	}, 0)

