$(function() {
	function rot13 (str) {
		return str.replace(/[a-zA-Z]/g, function(c) {
			return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
		});
	}

	$('.email').each(function(index) {
		$(this).replaceWith(rot13($(this).html()));
	});
});
