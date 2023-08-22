function multiplyBy(n) {
	return function (x) {
		return x * n;
	};
}

const doubled = multiplyBy(2);
console.log(doubled(5));

// custom hof that
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
