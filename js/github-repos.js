$(function() {
    var limit = 10;       // how many repos to list
    var login = 'mkhl';   // your username

    $.getJSON('http://github.com/api/v1/json/' + login + '?callback=?', function(data) {
        var repos = $.grep(data.user.repositories, function() {
            return !this.fork;
        });

        repos.sort(function(a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });

        $.each(repos.slice(0, limit), function() {
            $('#repos').append('<a href="' + this.url + '">' + this.name + '</a><br />');
        });
    });
});
