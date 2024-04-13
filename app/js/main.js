$(function () {
    
    $('.program__tab-link').on('click', function(e){
        e.preventDefault();
        const tabId = $(this).attr('href');

        $('.program__tab-link').removeClass('program__tab-link--active');
        $(this).addClass('program__tab-link--active');

        if ($('.program__tab-item').hasClass('program__tab-item--active')) {
            $('.program__tab-item').removeClass('program__tab-item--active');
        }
        $(tabId).addClass('program__tab-item--active')

    });

});