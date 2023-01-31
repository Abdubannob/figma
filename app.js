$('.hams ').click(function(){
    $('.ham-menu').css({right: 0, top: 0})
    // $('.hams').css('display', 'none')
})
$('.exit').click(function(){
    $('.ham-menu').css({right: -400, top: 0})
    // $('.hams').css('display', 'inline-block')
})
$('.plus').click(function(){
    $('.ans-box').css('display', 'inline-block')
})
$('.ex').click(function(){
    $('.ans-box').css('display', 'none')

})