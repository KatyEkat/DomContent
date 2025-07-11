document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".form-data-block");
	const popup = document.getElementById("form-popup");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		form.reset();

		popup.style.display = "block";

		setTimeout(() => {
			popup.style.display = "none";
		}, 3000);
	});

	const countries = [
		{ flag: "🇷🇺", code: "+7", name: "Россия" },
		{ flag: "🇧🇾", code: "+375", name: "Беларусь" },
		{ flag: "🇺🇦", code: "+380", name: "Украина" },
		{ flag: "🇺🇸", code: "+1", name: "США" },
		{ flag: "🇬🇧", code: "+44", name: "Англия" },
		{ flag: "🇩🇪", code: "+49", name: "Германия" },
	];

	const dropdown = document.getElementById("country-btn");
	const countryCode = document.getElementById("country-code");
	const countryList = document.getElementById("country-list");
	const flagSpan = dropdown.querySelector(".country-flag");

	dropdown.addEventListener("click", () => {
		countryList.hidden = !countryList.hidden;
		dropdown.setAttribute("aria-expanded", !countryList.hidden);
	});

	countryList.addEventListener("click", (e) => {
		if (e.target.tagName === "LI") {
			flagSpan.textContent = e.target.dataset.flag;
			countryCode.textContent = e.target.dataset.code;
			countryList.hidden = true;
			dropdown.setAttribute("aria-expanded", "false");
		}
	});

	document.addEventListener("click", (e) => {
		if (!dropdown.contains(e.target) && !countryList.contains(e.target)) {
			countryList.hidden = true;
			dropdown.setAttribute("aria-expanded", "false");
		}
	});
});
