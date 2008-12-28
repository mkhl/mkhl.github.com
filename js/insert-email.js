var mail = function () {
	var self = new Object;
	var emailLink = "<n uers=\"znvygb:znegva\056xhruy\100tznvy\056pbz\">znegva\056xhruy\100tznvy\056pbz<\057n>";
	var emailString = "znegva\056xhruy\100tznvy\056pbz";

	function rot13Char (c) {
		return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
	}
	function rot13String (str) {
		return str.replace(/[a-zA-Z]/g, rot13Char);
	}

	self.insertLink = function (otherString) {
		var otherString = otherString || "";
		document.write(rot13String(emailLink) + otherString);
	};
	self.insertString = function (otherString) {
		var otherString = otherString || "";
		document.write(rot13String(emailString) + otherString);
	};

	return self;
}();
