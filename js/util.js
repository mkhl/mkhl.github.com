jQuery.fn.sort = function() {
	return this.pushStack(jQuery.makeArray([].sort.apply(this, arguments)));
};

String.prototype.truncate = function(length, truncation) {
	length = length || 30;
	truncation = (typeof truncation == 'undefined') ? '&hellip;' : truncation;
	return this.length > length
		? this.slice(0, length) + truncation
		: this;
};
