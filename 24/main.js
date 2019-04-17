
// Задание 1.
$(document).ready(function() {
    $('#butt-1').click(function() {
        $('p.red, li').css('color', 'red');
    });
});

// Задание 2.
$(document).ready(function() {
    $('#butt-2').click(function() {
        $('div + p').css('color', 'blue');
    });
});

// Задание 3.
$(document).ready(function() {
    $('#butt-3').click(function() {
        $('p strong').css('font-style', 'italic');
    });
});

// Задание 4.
$(document).ready(function() {
    $('#butt-4').click(function() {
        $('.blocks > div').css('background-color', 'pink');
    });
});
