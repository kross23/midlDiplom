const sladestwo = () => {
	const wrapslaid = document.querySelector('#services'); // обертка
	const wrapper = wrapslaid.querySelector('.wrapper'); //
	// кнопки должны быть тут
	const slaiderKontainer = document.createElement('div');
	const servicesSlider = wrapslaid.querySelector('.services-slider'); // track
	const slaidAll = wrapslaid.querySelectorAll('.slide');
	servicesSlider.parentNode.removeChild(servicesSlider);
	slaiderKontainer.classList.add('slaide-kontainer');
	slaiderKontainer.append(servicesSlider);
	wrapper.appendChild(slaiderKontainer);
	servicesSlider.classList.add('slaider-track');
	slaidAll.forEach(item => {
		item.classList.add('slaider-item');
	});
	const prevBtn = document.createElement('div');
	const nextBtn = document.createElement('div');
	prevBtn.innerHTML = '<span class = "prev"> < </span>';
	nextBtn.innerHTML = '<span class = "next"> > </span>';
	prevBtn.classList.add('slider-arrow');
	nextBtn.classList.add('slider-arrow');
	prevBtn.classList.add('prev');
	nextBtn.classList.add('next');

	const slKontainer = document.querySelector('.slaide-kontainer');
	const track = document.querySelector('.slaider-track');
	const itemcount = wrapslaid.querySelectorAll('.slaider-item').length;
	track.classList.remove('services-slider');
	slKontainer.classList.add('services-slider');
	slKontainer.appendChild(prevBtn);
	slKontainer.appendChild(nextBtn);
	let position = 0;
	const slidsToShow = 5;
	const slidsToScroll = 1;
	const itemwith = slKontainer.clientWidth / slidsToShow;
	const movePosition = slidsToScroll * itemwith;

	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};
	const checkBtn = () => {
		prevBtn.disabled = position === 0;
		nextBtn.disabled = position <= (itemcount - slidsToShow) * itemwith;

	};
	prevBtn.addEventListener('click', () => {
		const itemleft = Math.abs(position) / itemwith;
		position += itemleft >= slidsToScroll ? movePosition : itemleft * itemwith;
		setPosition();
		checkBtn();
	});
	nextBtn.addEventListener('click', () => {
		const itemleft = itemcount - (Math.abs(position) + slidsToShow * itemwith) / itemwith;
		position -= itemleft >= slidsToScroll ? movePosition : itemleft * itemwith;
		setPosition();
		checkBtn();
	});
};
export default sladestwo;
