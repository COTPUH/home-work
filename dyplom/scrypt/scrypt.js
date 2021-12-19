$('.about-items>div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('.items-selector>div').on('click',function() {
 $(this).next('p').slideToggle(300);
 $(this).next('.items__hr').toggleClass('toggleBg');
 $(this).children('.selector__pre-title').toggleClass('items-toggleColor');

})





