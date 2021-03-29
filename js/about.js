//About Hero Variables
const aboutHero = document.querySelector(".about-hero");
const aboutHeroTextGroup = document.querySelector(".abouthero-textgroup");
const aboutHeroImg = document.querySelector(".abouthero-img");

//About Heritage Variables
const aboutHeritage = document.querySelector(".about-heritage");
const aboutHeritageTextGroup = document.querySelector(".aboutheritage-textgroup");
const aboutHeritageImg = document.querySelector(".aboutheritage-img");

//About Leaders Variables
const aboutLeaders = document.querySelector(".leaders");
// const aboutLeadersGroup = document.querySelector(".leader-group");


//Observer Options
const aboutHeroOptions = {};
const aboutOptions = {threshold: 0.2};


//About Hero Observer
const aboutHeroObserver = new IntersectionObserver(function(entries, aboutHeroObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            setTimeout(() => {
                aboutHeroTextGroup.classList.add("fade-in");
                aboutHeroImg.classList.add("fade-in");

            }, 250)
            

            aboutHeroObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, aboutHeroOptions);

aboutHeroObserver.observe(aboutHero);


//About Heritage Observer
const aboutHeritageObserver = new IntersectionObserver(function(entries, aboutHeritageObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            setTimeout(() => {
                aboutHeritageTextGroup.classList.add("fade-in");
                aboutHeritageImg.classList.add("fade-in");
            }, 250)
            aboutHeritageObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, aboutOptions);

aboutHeritageObserver.observe(aboutHeritage);


//About Leaders Observer
const aboutLeadersObserver = new IntersectionObserver(function(entries, aboutLeadersObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            
            let aboutLeadersGroup = $(".leader-group");
            aboutLeadersGroup.each(function(i){
                setTimeout(function(){
                    aboutLeadersGroup.eq(i).addClass("fade-in");
                }, 100 * (i+1));
            });

            aboutLeadersObserver.unobserve(entry.target)
        } 
        console.log(entry.target);
    });
}, aboutOptions);

aboutLeadersObserver.observe(aboutLeaders);





