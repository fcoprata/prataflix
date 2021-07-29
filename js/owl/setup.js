$('.owl-carousel').owlCarousel({
    loop:true, //faz o carrossel
    margin:10, //margin
    nav:false,  //navegação 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1500:{
            items:8
        }
    }
})