/**
 * Created by Shameel on 5/2/2015.
 */

$(document).ready(function(){

    $('.fullName').addClass('fadeInUpBig');
    $('.occupation').addClass('fadeInUpBig');

    $('nav li').click(function(){
        $('nav li').removeClass('active');
        $(this).addClass('active');
    });

    $('.post-icon').hide()

    $('.timeline-post').hover(function(){
        $('.post-icon').show();
    }, function(){$('.post-icon').hide()});

});