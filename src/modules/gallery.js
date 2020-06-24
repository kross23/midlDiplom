const gallery = () => {
	const galler = document.querySelector('.gallery-bg');
	const gallerySlider = galler.querySelector('.gallery-slider');
	gallerySlider.style.position = 'relative';
	const slides = galler.querySelectorAll('.slide');
	const slength = galler.querySelectorAll('.slide').length;
	const uL = document.createElement('ul');
	uL.classList.add('slider-dots');
	for (let i = 0; i < slength; i++) {
		const Li = document.createElement('li');
		Li.classList.add('dot');
		Li.innerHTML = '<button></button>';
		uL.append(Li);
	}
	gallerySlider.append(uL);
	const lidots = galler.querySelectorAll('li');
	const prev = document.createElement('div');
	const next = document.createElement('div');
	prev.classList.add('slider-arrow');
	next.classList.add('slider-arrow');
	prev.classList.add('prev');
	next.classList.add('next');
	prev.innerHTML = '<span><</span>';
	next.innerHTML = '<span>></span>';
	gallerySlider.append(prev);
	gallerySlider.appendChild(next);
	let count = 0,
		interval;
	//...........................................................
	slides.forEach(item => {
		item.classList.add('none');
	});
	lidots[0].classList.add('slick-active');
	slides[0].classList.remove('none');
	const toggle = (item, index, fu) => {
		item[index].classList.toggle(fu);
	};
	const autoplaySlayd = () => {
		toggle(lidots, count, 'slick-active');
		toggle(slides, count, 'none');

		count++;
		if (count >= slides.length) {
			count = 0;
		} else if (count < 0) {
			count = slides.length - 1;
		}
		toggle(lidots, count, 'slick-active');
		toggle(slides, count, 'none');
	};
	const startSlayde = (time = 3000) => {
		interval = setInterval(autoplaySlayd, time);
	};
	const stopSlayde = () => {
		clearInterval(interval);
	};
	galler.addEventListener('click', event => {
		event.preventDefault();
		const prev = event.target.closest('.prev');
		const next = event.target.closest('.next');
		const dot = event.target.closest('.dot');

		toggle(lidots, count, 'slick-active');
		toggle(slides, count, 'none');
		if (next !== null) {
			count++;
		} else if (prev !== null) {
			count--;
		} else if (dot !== null) {
			lidots.forEach((item, index) => {
				if (item === dot) {
					count = index;
				}
			});
		}
		if (count >= slides.length) {
			count = 0;
		}
		if (count < 0) {
			count = slides.length - 1;
		}

		toggle(lidots, count, 'slick-active');
		toggle(slides, count, 'none');
	});
	galler.addEventListener('mouseover', event => {

		const arrow = event.target.closest('.slider-arrow');
		const dot = event.target.closest('.dot');
		if (arrow !== null ||
		dot !== null) {
			stopSlayde();
		}
	});
	galler.addEventListener('mouseout', event => {
		const arrow = event.target.closest('.slider-arrow');
		const dot = event.target.closest('.dot');
		if (arrow !== null ||
		dot !== null) {
			startSlayde();
		}
	});

	startSlayde(3000);

};
export default gallery;
