$(function() {
	var limit = 10;       // how many repos to list
	var login = 'mkhl';   // your username

	$.getJSON('http://github.com/api/v1/json/' + login + '?callback=?', function(data) {
		$(data.user.repositories).filter(function() {
			return !this.fork;
		}).sort(function(a, b) {
			return b.watchers - a.watchers;
		}).slice(0, limit).each(function() {
			$('#repos').append(this.name.truncate(25).link(this.url) + '<br />');
		});
	});
});
