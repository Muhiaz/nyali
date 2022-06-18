const left = document.querySelector('.la-arrow-left');
const right = document.querySelector('.la-arrow-right');
const slides = document.querySelector('.slider').children;
let index = 0;

left.addEventListener('click',()=>{
	prevSlide();
});
right.addEventListener('click',()=>{
	nextSlide();
});
function prevSlide(){
	if(index == 0){
		index = slides.length - 1;
	}
	else{
		index--;
	}
	changeSlide();
}
function nextSlide(){
	if(index == slides.length - 1){
		index = 0;
	}
	else{
		index++;
	}
	changeSlide();
}
function changeSlide(){
	for(i=0;i<slides.length;i++){
		slides[i].classList.remove('active');
	}
	slides[index].classList.add('active');
}
let slidein = setInterval(nextSlide,5000);



const buttonright = document.querySelector('.buttonright');
	const buttonleft = document.querySelector('.buttonleft');
	const autos = document.querySelector('.autos');
	buttonleft.addEventListener('click',()=>{
		autos.scrollLeft += 402;
		console.log(autos.scrollLeft);
	});
	buttonright.addEventListener('click',()=>{
		autos.scrollLeft -= 402;
		console.log(autos.scrollRight);
	});
	const maxScrollLeft = autos.scrollWidth - autos.clientWidth;
	function autoplay(){
		if(autos.scrollLeft == (maxScrollLeft - 1)){
			autos.scrollLeft -= maxScrollLeft;
		}
		else{
			autos.scrollLeft += 1;
		}
	}
	let timer = setInterval(autoplay,100);