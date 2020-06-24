const headSlider = () => {
	const slaides = document.querySelector('.main-slider');
	const slaid = slaides.querySelectorAll('.slide');
	let count = 0;
	slaid[0].style.display = 'none';
	slaid[0].classList.add('none');
	const prew = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);

	};
	const next = (elem, index, strClass) => {
		elem[index].classList.add(strClass);

	};
	const autoplaySlayd = () => {
		prew(slaid, count, 'activel');
		count++;
		if (count >= slaid.length) {
			count = 0;
		}
		next(slaid, count, 'activel');
	};
	const startSlayde = (time = 3000) => {
		setInterval(autoplaySlayd, time);
	};
	startSlayde(2000);
};
export default headSlider;
