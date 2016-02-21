function init(){
 TweenMax.fromTo('.cont_modal_back',1,{top:'-100%'},{top:'0%',delay:0.5});

TweenMax.fromTo('.cont_text_modal',1,{top:'-100%'},{top:50,delay:1});
}

imagesLoaded( document.querySelector('.cont_principal'), function( ) {
init();
});
