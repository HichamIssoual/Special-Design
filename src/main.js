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
	"06.png",
	"07.jpg",
	"08.jpg",
	"09.jpg",
	"10.jpg"
	];
// check if user have any image in local storage
if (localStorage.getItem("img")) {
	landing.style.backgroundImage = localStorage.getItem("img");
}
// set interval for doing the operation of number of seconds
setInterval(() => {
	let randIndex = Math.floor(Math.random() * imgs.length);
	landing.style.backgroundImage = `url(./imgs/landing/${imgs[randIndex]})`;
    // add image to local storage
	window.localStorage.setItem("img", `url(./imgs/landing/${imgs[randIndex]})`)
}, 8000)
// end Random background Image of Landing page


// start showing the progress of skill when i scroll the him with animation
// hunt the progress div
let progressTriger = document.querySelector(".skills-trigger");
let progressAll= document.querySelectorAll(".progress");
let progressPosition = progressTriger.offsetTop;
window.onscroll = function() {
	if(window.scrollY >= progressPosition){
		progressAll.forEach((ele)=>{
			ele.style.width = ele.dataset.width;
		})
	}
}

// End showing the progress of skill when i scroll the him with animation
// Start Gallery Features
// hunt all images 
let allImgs = document.querySelectorAll(".gallery-imgs > img");
allImgs.forEach((ele)=>{
	ele.addEventListener("click",function(){
		let copyImage = ele.cloneNode(true);
		poupImage(copyImage);
	})
})
// create Pop Function
function poupImage(ele) {
	let poupContain = document.createElement("div");
	poupContain.classList.add("poup-img");
	let imgContain = document.createElement("div");
	imgContain.classList.add("img-contain");
	let imageName = document.createElement("h1");
	imageName.classList.add("img-name");
	imageName.append(`Image ${ele.dataset.number}`);
	let closePoup = document.createElement("span");
	closePoup.classList.add("close-poup");
	closePoup.onclick = function () {
		poupContain.remove();
	}
	closePoup.append("X");
	imgContain.append(closePoup);
	imgContain.append(imageName);
	imgContain.append(ele);
	poupContain.append(imgContain);
	document.body.append(poupContain);
}
// end Gallery Features