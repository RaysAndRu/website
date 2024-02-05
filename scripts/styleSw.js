//анимация панельки

const styleSwitchShest = document.querySelector(".shesterenka"); 
styleSwitchShest.addEventListener("click", () => {
	document.querySelector(".style__switch").classList.toggle("open"); 
})


//смена цветов на странице

const alternativeStyle = document.querySelectorAll(".alternate__color");
function setActiveStyle(color) 
{
	alternativeStyle.forEach((style) => {
		if(color === style.getAttribute("title")) {
			style.removeAttribute("disabled");	
		}
		else {
			style.setAttribute("disabled", "true");
		}
	})	
}


//Смена темы Черно - белый

const dayNight = document.querySelector(".day__night");
dayNight.addEventListener("click", () => {

	document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
	if(document.body.classList.contains("dark")) {
		dayNight.querySelector("i").classList.add("moon");
	}

	else {
		dayNight.querySelector("i").classList.add("sun");
	}
})


//Загрузка страницы


let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
	mask.classList.add('hide');

	setTimeout(() => { 
		mask.remove();
	}, 3000);
});


