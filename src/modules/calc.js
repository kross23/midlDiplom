const calccart = () => {
	const cards = document.querySelector('#cards');
	const time = cards.querySelector('.time');
	const inputPrise = time.querySelectorAll('input');
	const priceTotal = cards.querySelector('#price-total');
	const club = cards.querySelector('#card_leto_mozaika');
	const cardOrder = cards.querySelector('#card_order');
	const iputPromo = cards.querySelector('.input-text');

	const price = () => {

		inputPrise.forEach((item, index) => {
			if (item.checked) {
				if (index === 0) {
					if (club.checked) {
						priceTotal.textContent = "1999";
					} else {
						priceTotal.textContent = "2999";
					}
				} else if (index === 1) {
					if (club.checked) {
						priceTotal.textContent = "9900";
					} else {
						priceTotal.textContent = "14990";
					}
				} else if (index === 2) {
					if (club.checked) {
						priceTotal.textContent = "13900";
					} else {
						priceTotal.textContent = "21990";
					}
				} else if (index === 3) {
					if (club.checked) {
						priceTotal.textContent = "19900";
					} else {
						priceTotal.textContent = "23990";
					}

				}
			}

		});

	};


	cardOrder.addEventListener('click', () => {
		const m1 = event.target.closest('input');//club
		const club = event.target.closest('.club');
		if (m1 !== null) {
			price();
		}
		if (club !== null) {
			price();
		}
	});
	iputPromo.addEventListener('input', event => {
		const target = event.target;
		if (target.value === 'ТЕЛО2019') {
			let	price = priceTotal.textContent;
			price = parseInt(price);
			const proc = Math.floor((price / 100) * 30);
			price -= proc;
			priceTotal.textContent = price;
		}
	});

};
export default calccart;
