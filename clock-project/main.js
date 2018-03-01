const setDate = () => {
	const now = new Date(); // get current date

	const seconds = now.getSeconds(); // get current seconds
	const secondsDegrees = ((seconds / 60) * 360) + 90; // add 90 degrees to offset 90deg default set up in css -- want hands to be top/bottom default
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = (((hour % 12) / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;	
}

const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);