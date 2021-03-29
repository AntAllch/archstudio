//Contact Variables
const contactHero = document.querySelector(".contact-hero");
const contactHeroTextGroup = document.querySelector(".contacthero-textgroup");
const contactHeroImg = document.querySelector(".contacthero-img");


//Observer Options
contactHeroOptions = {};


//About Hero Observer
const contactHeroObserver = new IntersectionObserver(function(entries, contactHeroObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            setTimeout(() => {
                contactHeroTextGroup.classList.add("fade-in");
                contactHeroImg.classList.add("fade-in");
            }, 250)
            
            contactHeroObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, contactHeroOptions);

contactHeroObserver.observe(contactHero);
