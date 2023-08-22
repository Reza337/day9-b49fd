// membuat ENDPOST (URL API)
const GETPOST = "https://api.npoint.io/4be8fe4b55cf947aefdc";
// Mengambil data dari API
const testimonial = new Promise((resolve, reject) => {
	const ajax = new XMLHttpRequest();

	ajax.open("GET", GETPOST, true);

	ajax.onload = function () {
		if (ajax.status === 200) {
			resolve(JSON.parse(ajax.response));
		} else {
			reject("Error Loading Data");
		}
	};

	ajax.onerror = function () {
		reject("Network Error");
	};

	ajax.send();
});

// Menampilkan data dari API ke HTML
async function showTestimonial() {
	try {
		const res = await testimonial;
		console.log(res);

		let testimonialHTML = "";
		res.forEach(function (item) {
			testimonialHTML += `
                <div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">
                ${item.quote}
                </p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
                </div>
            `;
		});
		document.getElementById("testimonials").innerHTML = testimonialHTML;
	} catch (err) {
		console.log(err);
	}
}
showTestimonial();

// Membuat filter berdasarkan rating dari data API
async function filterTestimonial(rating) {
	try {
		const res = await testimonial;
		let testimonialHTML = "";

		const testimonialFiltered = res.filter(function (item) {
			return item.rating === rating;
		});

		if (testimonialFiltered.length === 0) {
			testimonialHTML = `<h1>Data not found</h1>`;
		} else {
			testimonialFiltered.forEach(function (item) {
				testimonialHTML += `
				<div class="testimonial">
				<img src="${item.image}" class="profile-testimonial" />
				<p class="quote">
				${item.quote}
				</p>
				<p class="author">- ${item.author}</p>
				<p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
				</div>
			`;
			});
		}

		document.getElementById("testimonials").innerHTML = testimonialHTML;
	} catch (err) {
		console.log(err);
	}
}
