// let hamburger = $(".hamburger").on("click", () => {

//     console.log("Hamburger pressed");
//     $(".mobile-nav").toggleClass("open")

//     //each mobile nav link fades in 1 by 1
//     let mobNavLink = $(".mobile-nav-link");
//     mobNavLink.each(function(i){
//         setTimeout(function(){
//             mobNavLink.eq(i).toggleClass("appear");
//         }, 60 * (i+1));
//     });
    
// })

// let close = $(".close").on("click", () => {
    
//     console.log("Close button pressed")
//     $(".mobile-nav").removeClass("open")

//     //mobile nav links have "appear" class removed
//     let mobNavLink = $(".mobile-nav-link");
//     mobNavLink.each(function(i){
//         setTimeout(function(){
//             mobNavLink.eq(i).removeClass("appear");
//         }, 150 * (i+1));
//     });
    
// })

let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let mobileNav = document.querySelector(".mobile-nav");
let mobNavList = document.querySelector(".mobile-nav-list");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");



//When you press the hamburger to open the mobile menu
hamburger.addEventListener("click", () => {
    console.log("hamburger pressed");
    hamburger.style.display = "none";
    close.style.display = "block";
    mobileNav.classList.add("open")

    setTimeout(function() {
        mobNavList.classList.add("fade-links");
    }, 400);

    // setTimeout(function() {
    //     first.classList.add("fade-links");
    // }, 400);
    // setTimeout(function() {
    //     second.classList.add("fade-links");
    // }, 450);
    // setTimeout(function() {
    //     third.classList.add("fade-links");
    // }, 500);
})

//When you press the "X" to close the mobile menu
close.addEventListener("click", () => {
    console.log("close button pressed");
    close.style.display = "none";
    hamburger.style.display = "block";
    mobNavList.classList.remove("fade-links");
    mobileNav.classList.remove("open");

    // first.classList.remove("fade-links");
    // second.classList.remove("fade-links");
    // third.classList.remove("fade-links");
    // mobileNav.classList.remove("open");

})


