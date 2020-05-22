'use strict';
document.addEventListener("DOMContentLoaded", () => {

	//.............menu...............................................
	const menuSelect = () => {
		const header = document.querySelector('body');
		const clubSelect = document.querySelector('.clubs-list ul');
		const freeVisitVorm = document.querySelector('#free_visit_form');
		const callbackForm = document.querySelector('#callback_form');
		const gift = document.querySelector('#gift');
		const fixedGift = document.querySelector('.fixed-gift');

		header.addEventListener('click', event => {

			if (event.target.matches('.clubs-list p')) {
				clubSelect.style.display = 'block';
			} else if (!clubSelect.contains(event.target)) {

				clubSelect.style.display = 'none';
			}
			if (event.target.matches('.open-popup')) { //open-popup
				freeVisitVorm.style.display = 'block';

			} else if (event.target.matches('div.overlay') || event.target.matches('.close_icon')) { //form-content//close-form

				freeVisitVorm.style.display = 'none';

			}
			if (event.target.matches('.callback-btn')) {
				callbackForm.style.display = 'block';
			} else if (event.target.matches('.overlay') || event.target.matches('.close_icon')) { //overlay// close_icon
				callbackForm.style.display = 'none';
			}
			if (event.target.matches('.fixed-gift img')) { //id="gift //fixed-gift
				gift.style.display = 'block';
			} else if (event.target.matches('.overlay') && gift.style.display === 'block' ||
				event.target.matches('.close_icon') && gift.style.display === 'block' ||
				event.target.matches('.close-btn') && gift.style.display === 'block') { //btn close-btn
				gift.style.display = 'none';
				fixedGift.style.display = 'none';
			}
		});
	};
	menuSelect();

	//.............menu/....................
	const mainSlider = () => {
		const slider = document.querySelectorAll('.main-slider .slide');
		let curentSlayde = 0,
			interval;
		const prew = (elem, index) => {
			elem[index].style.display = 'none';
		};
		const next = (elem, index) => {
			elem[index].style.display = 'flex'; ///flex//'inline-block'
		};
		const autoplaySlayd = () => {
			prew(slider, curentSlayde);
			curentSlayde++;
			if (curentSlayde >= slider.length) {
				curentSlayde = 0;
			} else if (curentSlayde < 0) {
				curentSlayde = slider.length - 1;
			}
			next(slider, curentSlayde);
		};
		const startSlayde = (time = 3000) => {
			interval = setInterval(autoplaySlayd, time);

		};
		const stopSlayde = () => {
			clearInterval(interval);
		};
		startSlayde(3000);
	};

	mainSlider();
	//......................slayderKarusel....
	const slayderKarusel = () => {
		const mainSl = document.querySelector('#services .wrapper');
		const servicesSlider = document.querySelector('.services-slider'); //main слайды main
		const slide = document.querySelectorAll('.services-slider .slide');
		console.log('mainSl: ', mainSl);
		console.log('servicesSlider: ', servicesSlider);
		console.log('slide: ', slide);

		let position = 0,
			maxPosition,
			curent = 4,
			intervalSl = Math.floor(100 / curent);
		const addBtn = () => {
			const btnPrew = document.createElement('div'),
				btnNext = document.createElement('div'),
				slaiderElem = document.createElement('div'),
				rElem = document.createElement('div');
			rElem.classList.add('slaider_class');//
			slaiderElem.classList.add('services-slider');//slaider_class
			slide.forEach((item) => {
				item.classList.add('slaider_item');
				rElem.append(item);
			});
			slaiderElem.append(rElem);

			mainSl.appendChild(slaiderElem);

			console.log('slaiderElem: ', slaiderElem);

			//	servicesSlider = document.querySelector('.services-slider');
			servicesSlider.parentNode.removeChild(servicesSlider); //element.parentNode.removeChild(element);

			btnNext.classList.add('slider-arrow');
			btnPrew.classList.add('slider-arrow');
			btnNext.classList.add('next');
			btnPrew.classList.add('prev');
			btnNext.innerHTML = '<span>></span>';
			btnPrew.innerHTML = '<span><</span>';
			slaiderElem.appendChild(btnPrew);
			slaiderElem.append(btnNext);


		};
		addBtn();
		const btnNext = mainSl.querySelector('.next');
		console.log('btnNext: ', btnNext);
		const btnPrew = mainSl.querySelector('.prev');

		const addStyle = () => {
			const style = document.createElement('style');
			style.id = 'slider-style';
			style.textContent = `
			.sliderSl{
				overflow: hidden;
			}
			.slaider_class{
				transition: transform 0.6s ease;
				will-change: transform;
				display: flex;
				position: relative;
			}
			.slaider_item{
				flex: 0 0 10%;
			}
		
			`;
			document.head.appendChild(style);
		};
		addStyle();

		const prevSl = () => {
			--position;
			if (position < 0) {
				position = 0;
			}
			servicesSlider.style.transform = `translateX(-${position * intervalSl}%)`;
			console.log('position: ', position);
		}
		const nextSl = () => {
			++position;
			if (position > 6) {
				position = 6;
			}
			servicesSlider.style.transform = `translateX(-${position * intervalSl}%)`;
			console.log('position: ', position);
		}

		mainSl.addEventListener('click', (event) => {
			if (btnNext.contains(event.target)) {
				nextSl();
			} else if (btnPrew.contains(event.target)) {
				prevSl();
			}
		});

		//elem[index].classList.remove('slider-arrow'); ///flex//'inline-block'


		// const ServisSayde = (time = 3000) => {
		// 	interval = setInterval(ServisAutoSlayd, time);
		// };
		// ServisSayde(1000);
	};
	slayderKarusel();
});