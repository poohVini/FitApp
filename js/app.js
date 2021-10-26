"use strict"


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	Mobile: function () {
		return navigator.userAgent.search(/mobile/i);
	},
	any: function () {
		return ((isMobile.Android() || isMobile.BlackBerry()) || (isMobile.iOS() || isMobile.Opera()) || (isMobile.Windows() || isMobile.Mobile() > 0));
	}
}
if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});


// let menuParents = document.querySelectorAll('.menu__body');
// for (let index = 0; index < menuParents.length; index++) {
// 	const menuParent = menuParents[index];
// 	menuParent.addEventListener("mouseenter", function (e) {
// 		menuParent.classList.add('_active');
// 	});
// 	menuParent.addEventListener("mouseleave", function (e) {
// 		menuParent.classList.remove('_active');
// 	});
// }

let menuPageBurger = document.querySelector('.icon-menu');
let menuPageBody = document.querySelector('.menu__body');
let body = document.querySelector("body");
if (menuPageBurger) {
	menuPageBurger.addEventListener("click", function (e) {
		menuPageBurger.classList.toggle('_active');
		menuPageBody.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}



if (body.classList.contains('_pc')) {
	window.onload = function () {
		const parallax = document.querySelector('.parallax');
		const parallaxTwo = document.querySelector('.parallax__two');
		const parallaxTree = document.querySelector('.footer__parallax');

		if (parallax) {

			const berry1 = document.querySelector(".images-parallax__berry-1");
			const berry2 = document.querySelector(".images-parallax__berry-2");
			const berry3 = document.querySelector(".images-parallax__berry-3");
			const berry4 = document.querySelector(".images-parallax__berry-4");
			const berry5 = document.querySelector(".images-parallax__berry-5");
			const header = document.querySelector(".header");


			const forBerry1 = 20;
			const forBerry2 = 90;
			const forBerry3 = 50;
			const forBerry4 = 40;
			const forBerry5 = 40;

			const speed = 0.15;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				berry1.style.cssText = `transform: translate(${positionX / forBerry1}%,${positionY / forBerry1}%)`;
				berry2.style.cssText = `transform: translate(${positionX / forBerry2}%,${positionY / forBerry2}%)`;
				berry3.style.cssText = `transform: translate(${positionX / forBerry3}%,${positionY / forBerry3}%)`;
				berry4.style.cssText = `transform: translate(${positionX / forBerry4}%,${positionY / forBerry4}%)`;
				berry5.style.cssText = `transform: translate(${positionX / forBerry5}%,${positionY / forBerry5}%)`;
				requestAnimationFrame(setParallaxStyle);
			}
			setParallaxStyle();

			header.addEventListener("mousemove", function (e) {
				const parallaxWidth = header.offsetWidth;
				const parallaxHeight = header.offsetHeight;


				let box = header.getBoundingClientRect();
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;


				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - box.top - scrollTop - parallaxHeight / 2;

				coordXprocent = coordX;
				coordYprocent = coordY;


			});
		}
		if (parallaxTwo) {

			const berry1 = document.querySelector(".img-parralax-plan-1");
			const berry2 = document.querySelector(".img-parralax-plan-2");
			const berry3 = document.querySelector(".img-parralax-plan-3");
			const berry4 = document.querySelector(".img-parralax-plan-4");
			const header = document.querySelector(".plan");


			const forBerry1 = 70;
			const forBerry2 = 30;
			const forBerry3 = 50;
			const forBerry4 = 60;

			const speed = 0.15;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				berry1.style.cssText = `transform: translate(${positionX / forBerry1}%,${positionY / forBerry1}%)`;
				berry2.style.cssText = `transform: translate(${positionX / forBerry2}%,${positionY / forBerry2}%)`;
				berry3.style.cssText = `transform: translate(${positionX / forBerry3}%,${positionY / forBerry3}%)`;
				berry4.style.cssText = `transform: translate(${positionX / forBerry4}%,${positionY / forBerry4}%)`;
				requestAnimationFrame(setParallaxStyle);
			}
			setParallaxStyle();

			header.addEventListener("mousemove", function (e) {
				const parallaxWidth = header.offsetWidth;
				const parallaxHeight = header.offsetHeight;


				let box = header.getBoundingClientRect();
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;


				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - box.top - scrollTop - parallaxHeight / 2;

				coordXprocent = coordX;
				coordYprocent = coordY;


			});
		}
		if (parallaxTree) {

			const berry1 = document.querySelector(".img-parralax-footer-1");
			const berry2 = document.querySelector(".img-parralax-footer-2");
			const berry3 = document.querySelector(".img-parralax-footer-3");
			const berry4 = document.querySelector(".img-parralax-footer-4");
			const berry5 = document.querySelector(".img-parralax-footer-5");
			const footer = document.querySelector(".footer");


			const forBerry1 = 20;
			const forBerry2 = 50;
			const forBerry3 = 50;
			const forBerry4 = 60;
			const forBerry5 = 60;

			const speed = 0.15;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				berry1.style.cssText = `transform: translate(${positionX / forBerry1}px,${positionY / forBerry1}px)`;
				berry2.style.cssText = `transform: translate(${positionX / forBerry2}px,${positionY / forBerry2}px)`;
				berry3.style.cssText = `transform: translate(${positionX / forBerry3}px,${positionY / forBerry3}px)`;
				berry4.style.cssText = `transform: translate(${positionX / forBerry4}px,${positionY / forBerry4}px)`;
				berry5.style.cssText = `transform: translate(${positionX / forBerry5}px,${positionY / forBerry5}px)`;
				requestAnimationFrame(setParallaxStyle);
			}
			setParallaxStyle();

			footer.addEventListener("mousemove", function (e) {
				const parallaxWidth = footer.offsetWidth;
				const parallaxHeight = footer.offsetHeight;


				let box = footer.getBoundingClientRect();
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;


				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - box.top - scrollTop - parallaxHeight / 2;

				coordXprocent = coordX;
				coordYprocent = coordY;


			});
		}
	};
}

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	};
}
ibg();
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 2;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 500);
}
//_anim-items - для отметки анимированных блоков
//_anim-no-hide - для отмены анимации при прокрутке вверх
// active - событие активации анимации
// css / _anim-show - для повторения анимации в последующих блоках путем добавления этого класса








