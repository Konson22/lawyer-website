

let navBox = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.fa-bars');
let isOpen = true;
menuBtn.addEventListener('click', ()=>{
	if (isOpen) {
		navBox.classList.add('showNavBox');
		isOpen = false;
	}else{
		navBox.classList.remove('showNavBox');
		isOpen = true;
	}
})
