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


function redirect(){
    window.open("https://www.netflix.com/browse");
}
function trailer(){
    window.open("https://youtu.be/4ake9I0-6vA");
}