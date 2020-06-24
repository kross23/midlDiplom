const head = () => {
	const headMain = document.querySelector('header');
	const minmenu = document.querySelector('.clubs-list ul');
	const popvisit = document.querySelector('#free_visit_form');
	const allpopap = document.querySelectorAll('.popup');
	const callbackform = document.querySelector('#callback_form');
	const idgift = document.querySelector('#gift');
	const gift = document.querySelector('.fixed-gift');


	headMain.addEventListener('click', event => {
		const target = event.target;
		const sel = target.closest('.clubs-list'); //club-select
		const freevizit = target.closest('.free-visit'); //
		const callbtn = target.closest('.callback-btn'); //

		if (sel !== null) {
			minmenu.classList.add('active');
		} else {
			minmenu.classList.remove('active');
		}
		if (freevizit !== null) {
			popvisit.classList.add('active');
		}
		if (callbtn !== null) {
			callbackform.classList.add('active');
		}
	});

	allpopap.forEach(item => {
		item.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close') || target.classList.contains('close-btn')) { //close-btn
				item.classList.remove('active');
			} else {
				target = target.closest('.form-content');
			}
			if (!target) {
				item.classList.remove('active');
			}
		});
	});
	if (gift !== null) {
		gift.addEventListener('click', () => {
			idgift.classList.add('active');
			gift.classList.add('none');
		});
	}


};
export default head;
