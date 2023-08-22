// // Step :
// // - making class
// // - making object
// // - called it so it appears in browser using loop and innerHTML
// // - refactor the code so it implements inheritance AuthorTestimonial

// class Testimonial {
// 	#quote = "";
// 	#image = "";

// 	constructor(quote, image) {
// 		this.#quote = quote;
// 		this.#image = image;
// 	}

// 	get quote() {
// 		return this.#quote;
// 	}

// 	get image() {
// 		return this.#image;
// 	}

// 	get author() {
// 		throw new Error("getAuthor() method must be implemented");
// 	}

// 	get testimonialHTML() {
// 		return `
//         <div class="testimonial">
//         <img src="${this.image}" class="profile-testimonial" />
//         <p class="quote">
//             ${this.#quote}
//         </p>
//         <p class="author">- ${this.author}</p>
//         </div>
//         `;
// 	}
// }

// class AuthorTestimonial extends Testimonial {
// 	#author = "";

// 	constructor(author, quote, image) {
// 		super(quote, image);
// 		this.#author = author;
// 	}

// 	get author() {
// 		return this.#author;
// 	}
// }

// class CompanyTestimonial extends Testimonial {
// 	#company = "";

// 	constructor(author, quote, image) {
// 		super(quote, image);
// 		this.#company = author;
// 	}

// 	get author() {
// 		return this.#company + " Company";
// 	}
// }

// const testimonial1 = new CompanyTestimonial(
// 	"Muhammad Reza Fadilah",
// 	"Si paling keren",
// 	"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// const testimonial2 = new CompanyTestimonial(
// 	"Muhammad Reza Fadilah",
// 	"Si paling keren",
// 	"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// const testimonial3 = new CompanyTestimonial(
// 	"Muhammad Reza Fadilah",
// 	"Si paling keren",
// 	"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let index = 0; index < testimonialData.length; index++) {
// 	testimonialHTML += testimonialData[index].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

const testimonialData = [
	{
		author: "Muhammad Reza Fadilah",
		quote: "Si paling keren",
		image:
			"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		rating: 5,
	},
	{
		author: "Muhammad Reza Fadilah",
		quote: "Si paling keren",
		image:
			"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		rating: 4,
	},
	{
		author: "Muhammad Reza Fadilah",
		quote: "Si paling keren",
		image:
			"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		rating: 3,
	},
	{
		author: "Muhammad Reza Fadilah",
		quote: "Si paling keren",
		image:
			"https://get.pxhere.com/photo/attractive-beautiful-beautiful-girl-beauty-blurred-background-brazilian-woman-casual-close-up-countryside-daylight-daytime-eyes-eyewear-face-facial-expression-fashion-fashionable-female-girl-grass-hair-hairstyle-hands-human-lady-landscape-lips-looking-model-nature-outdoors-outside-people-person-photoshoot-pose-posing-pretty-rural-skin-wear-woman-young-youth-1572135.jpg",
		rating: 3,
	},
	{
		author: "Muhammad Reza Fadilah",
		quote: "Si paling keren",
		image:
			"https://c.pxhere.com/images/9d/ea/2510ba77b469beb7c2bcb03738ea-1419064.jpg!d",
		rating: 2,
	},
];

function allTestimonials() {
	let testimonialHTML = "";
	testimonialData.forEach(function (item) {
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
}

allTestimonials();

function filterTestimonials(rating) {
	let testimonialHTML = "";

	const testimonialFiltered = testimonialData.filter(function (item) {
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
}
