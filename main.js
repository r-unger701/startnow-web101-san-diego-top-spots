$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        for(i = 0; i < data.length; i++) {
        $('table').find('tbody')
        .append('<tr>')
        .append('<td>' + data[i].name)
        .append('<td>' + data[i].description)
        .append('<td><a href=" ' + data[i].location + ' ">Open in Google Maps');
        }
    })
});