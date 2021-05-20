
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

//Home Featured Variables
const featured = document.querySelector(".featured");
const featuredGroup = document.querySelector(".featured-group");


//Intersectional Observers Options
const homeHeaderOptions = {};
const indexHeroOptions = {};
const welcomeOptions = {threshold: 0.5};
const featuredOptions = {threshold: 0.2};

//Home Nav Observer
const homeHeaderObserver = new IntersectionObserver(function(entries, homeHeaderObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            setTimeout(() =>{ //wait 2.1 seconds before running this function
                homeHeader.classList.add("fade-in");
            }, 2100)
            homeHeaderObserver.unobserve(entry.target);
        } else {
            return;
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
            }, 1500)
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


//Welcome Section Observer
const featuredObserver = new IntersectionObserver(function(entries, featuredObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){ 
            return;
        } else {

            let featuredGroup = $(".featured-group");
            featuredGroup.each(function(i){
                setTimeout(function(){
                    featuredGroup.eq(i).addClass("fade-in");
                }, 100 * (i+1));
            });

            featuredObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, featuredOptions);

featuredObserver.observe(featured);

//--------------------------- End of Intersection Observer ---------------------------//


