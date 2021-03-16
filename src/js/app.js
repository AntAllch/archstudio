let hamburger = $(".hamburger").on("click", () => {

    console.log("Hamburger pressed");
    $(".mobile-nav").toggleClass("open")

    //each mobile nav link fades in 1 by 1
    let mobNavLink = $(".mobile-nav-link");
    mobNavLink.each(function(i){
        setTimeout(function(){
            mobNavLink.eq(i).toggleClass("appear");
        }, 60 * (i+1));
    });
    
})

let close = $(".close").on("click", () => {
    
    console.log("Close button pressed")
    $(".mobile-nav").removeClass("open")

    //mobile nav links have "appear" class removed
    let mobNavLink = $(".mobile-nav-link");
    mobNavLink.each(function(i){
        setTimeout(function(){
            mobNavLink.eq(i).removeClass("appear");
        }, 150 * (i+1));
    });
    
})

