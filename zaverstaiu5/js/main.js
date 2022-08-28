$(document).ready(function () {
    $('.reviews__content').slick({
        draggable: false,
        prevArrow: '<a class="prev-arrow"><svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="36" transform="matrix(-1 0 0 1 36 36)" fill="#CC8B86"/><path d="M19.2929 36.7071C18.9024 36.3166 18.9024 35.6834 19.2929 35.2929L25.6569 28.9289C26.0474 28.5384 26.6805 28.5384 27.0711 28.9289C27.4616 29.3195 27.4616 29.9526 27.0711 30.3431L21.4142 36L27.0711 41.6569C27.4616 42.0474 27.4616 42.6805 27.0711 43.0711C26.6805 43.4616 26.0474 43.4616 25.6569 43.0711L19.2929 36.7071ZM52 37H20V35H52V37Z" fill="#F5F2ED"/></svg></a>',
        nextArrow: '<a class="next-arrow"><svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="36" fill="#CC8B86"/><path d="M52.7071 36.7071C53.0976 36.3166 53.0976 35.6834 52.7071 35.2929L46.3431 28.9289C45.9526 28.5384 45.3195 28.5384 44.9289 28.9289C44.5384 29.3195 44.5384 29.9526 44.9289 30.3431L50.5858 36L44.9289 41.6569C44.5384 42.0474 44.5384 42.6805 44.9289 43.0711C45.3195 43.4616 45.9526 43.4616 46.3431 43.0711L52.7071 36.7071ZM20 37H52V35H20V37Z" fill="#F5F2ED"/></svg></a>'
    });
});

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset - 65
    }, 700);
});