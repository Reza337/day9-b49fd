let dataBlog = [];

function addBlog(event) {
	event.preventDefault();

	let title = document.getElementById("input-blog-title").value;
	let startDate = document.getElementById("input-blog-startDate").value;
	let endDate = document.getElementById("input-blog-endDate").value;
	let input = document.querySelectorAll(".multi-input:checked");
	let content = document.getElementById("input-blog-content").value;
	let image = document.getElementById("input-blog-image").files;

	image = URL.createObjectURL(image[0]);
	console.log(image);

	let start = new Date(startDate);
	let end = new Date(endDate);

	if (start > end) {
		return alert("You Fill End Date Before Start Date");
	}

	let difference = end.getTime() - start.getTime();
	let days = difference / (1000 * 3600 * 24);
	let weeks = Math.floor(days / 7);
	let months = Math.floor(weeks / 4);
	let years = Math.floor(months / 12);
	let duration = "";

	if (days > 0) {
		duration = days + " Hari";
	}
	if (weeks > 0) {
		duration = weeks + " Minggu";
	}
	if (months > 0) {
		duration = months + " Bulan";
	}
	if (years > 0) {
		duration = years + " Tahun";
	}

	const nodeJsIcon = '<i class="fa-brands fa-node"></i>';
	const reactIcon = '<i class="fa-brands fa-square-js"></i>';
	const javaIcon = '<i class="fa-brands fa-react"></i>';
	const typeIcon = '<i class="fa-brands fa-node-js"></i>';

	let nodeJs = document.getElementById("input-chk-node").checked
		? nodeJsIcon
		: "";
	let nextJs = document.getElementById("input-chk-next").checked
		? reactIcon
		: "";
	let reactJs = document.getElementById("input-chk-react").checked
		? javaIcon
		: "";
	let typeScript = document.getElementById("input-chk-ts").checked
		? typeIcon
		: "";

	let multiInput = document.querySelectorAll(".multi-input:checked");
	if (multiInput.length === 0) {
		return alert("Please Select At least One Technologies");
	}

	let blog = {
		title,
		duration,
		content,
		nodeJs,
		nextJs,
		reactJs,
		typeScript,
		image,
	};

	dataBlog.push(blog);
	console.log(dataBlog);

	renderBlog();
}

function renderBlog() {
	document.getElementById("contents").innerHTML = "";
	for (let index = 0; index < dataBlog.length; index++) {
		document.getElementById("contents").innerHTML += `
                <div class="container-card">
                    <div class="card-content">
                        <img src="${dataBlog[index].image}" alt="gambar">
                        <a href="blog-detail.html" target="_blank">
                          <h1>
                            ${dataBlog[index].title}
                          </h1>
                        </a>
                        <p>durasi : ${dataBlog[index].duration}</p>
                        <div id="container-desc">
                        ${dataBlog[index].content}
                        </div>
                        <div>
                          ${dataBlog[index].nodeJs}
                          ${dataBlog[index].nextJs}
                          ${dataBlog[index].reactJs}
                          ${dataBlog[index].typeScript}
                        </div>
                        <div class="ctn-btn">
                            <div class="btn-left">
                                <button>edit</button>
                            </div>
                            <div class="btn-right">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
	}
}
