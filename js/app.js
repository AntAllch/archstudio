// window.$ = require('jquery');

//----------------------------- Start of Mobile Nav Menu -----------------------------//

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
        }, 80 * (i+1));
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

//------------------------------ End of Mobile Nav Menu ------------------------------//

////////////////////////////////////////////////////////////////////////////////////////

//-------------------------- Start of Intersection Observer --------------------------//

//Nav Variables
const homeHeader = document.querySelector(".home-header");

//Home Hero Variables
const indexHero = document.querySelector(".hero");
const heroText = document.querySelector(".hero-textcontent");
const pageTags = document.querySelector(".page-tags");

//Home Welcome Variables
const welcome = document.querySelector(".welcome");
const welcomeText = document.querySelector(".welcome-textcontent");
const welcomeImg = document.querySelector(".welcome-image");


//Intersectional Observers Options
const homeHeaderOptions = {};
const indexHeroOptions = {};
const welcomeOptions = {threshold: 0.5};


//Home Nav Observer
const homeHeaderObserver = new IntersectionObserver(function(entries, homeHeaderObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            setTimeout(() =>{ //wait 2.1 seconds before running this function
                homeHeader.classList.add("fade-in");
            }, 2100)
            // homeHeaderObserver.unobserve(entry.target)
        }
        console.log(entry.target);
    });
}, homeHeaderOptions);

homeHeaderObserver.observe(homeHeader);


//Index Hero Observer
const indexHeroObserver = new IntersectionObserver(function(entries, indexHeroObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            setTimeout(() =>{ //wait 2.1 seconds before running this function
                heroText.classList.add("fade-in");
            }, 2100)
            indexHeroObserver.unobserve(entry.target)
        }
        console.log(entry.target);
    });
}, indexHeroOptions);

indexHeroObserver.observe(indexHero);


//Welcome Section Observer
const welcomeObserver = new IntersectionObserver(function(entries, welcomeObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){ 
            return;
        } else {
            welcomeText.classList.add("fade-in");
            welcomeImg.classList.add("fade-in");
            welcomeObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, welcomeOptions);

welcomeObserver.observe(welcome);
//--------------------------- End of Intersection Observer ---------------------------//


