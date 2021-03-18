// window.$ = require('jquery');

let hamburger = $(".hamburger").on("click", () => {

    console.log("Hamburger pressed");
    $(".mobile-nav").addClass("open")
    $(".hamburger").css("display","none");
    $(".close").css("display","block");
    $(".mobile").css("position","fixed");

    // //each mobile nav link fades in 1 by 1
    let mobNavLink = $(".mobile-nav-link");
    mobNavLink.each(function(i){
        setTimeout(function(){
            mobNavLink.eq(i).addClass("fade-links");
        }, 60 * (i+1));
    });
    
})

let close = $(".close").on("click", () => {
    
    console.log("Close button pressed")
    $(".mobile-nav").removeClass("open");
    $(".hamburger").css("display","block");
    $(".close").css("display","none");
    $(".mobile").css("position","initial");

    //mobile nav links have "appear" class removed
    let mobNavLink = $(".mobile-nav-link");
    mobNavLink.each(function(i){
        setTimeout(function(){
            mobNavLink.eq(i).removeClass("fade-links");
        }, 60 * (i+1));
    });
    
})