// Start Random background Image of Landing page
// hunt the landing page conatiner
let landing = document.querySelector(".landing");
// create Array Of Images
let imgs = [
	"01.jpg",
	"02.jpg", 
	"03.jpg", 
	"04.jpg", 
	"05.jpg", 
	"06.jpg", 
	"07.jpg", 
	"08.jpg", 
	"09.jpg", 
	"10.jpg"
	];
// check if user have any image in local storage
if(localStorage.getItem("img")){
	landing.style.backgroundImage = localStorage.getItem("img");
}
// set interval for doing the operation of number of seconds
setInterval(()=>{
	let randIndex = Math.floor(Math.random() * imgs.length);
	landing.style.backgroundImage = `url(./imgs/landing/${imgs[randIndex]})`;
	// add image to local storage
	window.localStorage.setItem("img", `url(./imgs/landing/${imgs[randIndex]})`)
},8000)
// end Random background Image of Landing page