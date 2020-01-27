// "falsy bouncer"

function bouncer(arr) {

	// pass in Boolean and invoke its ctor as callback function
	return arr.filter(Boolean); // returns an array with falsy elements removed
}

bouncer([1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5]);
// [1, 2, "b", {}, 3, 5]
