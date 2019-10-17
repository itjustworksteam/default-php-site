/*
 Author: Ukieweb
 Template: Balk (Coming Soon)
 Version: 1.0
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    "use strict";


/*
 ----------------------------------------------------------------------
 Preloader
 ----------------------------------------------------------------------
 */
    $(".loader").delay(100).fadeOut();
    $(".animationload").delay(100).fadeOut("fast");


/*
 ----------------------------------------------------------------------
 Nice scroll
 ----------------------------------------------------------------------
 */
    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });


/*
 ----------------------------------------------------------------------
 Watch
 ----------------------------------------------------------------------
 */
    if($.find('#watch')[0]) {
        var date = new Date();
        $('#watch').countDown({
            targetDate: {
                'day': 		date.getDate(),
                'month': 	date.getMonth(),
                'year': 	1900 + date.getYear() + 1,
                'hour': 	date.getHours(),
                'min': 		date.getMinutes(),
                'sec': 		date.getSeconds()
            },
            omitWeeks: true
        });
        //enter the count down date using the format year, month, day, time: hour, min, sec

    }

}); // End $(document).ready(function(){





















