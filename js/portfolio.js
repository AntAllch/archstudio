//Portfolio Variables
const portfolio = document.querySelector(".portfolio");
const portfolioGroup = document.querySelector(".portfolio-group");


//Observer Options
const portfolioOptions = {};


//Portfolio Observer
const portfolioObserver = new IntersectionObserver(function(entries, portfolioObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            
            let portfolioGroup = $(".portfolio-group");
            portfolioGroup.each(function(i){
                setTimeout(function(){
                    portfolioGroup.eq(i).addClass("fade-in");
                }, 100 * (i+1));
            });

            portfolioObserver.unobserve(entry.target)

        } 
        console.log(entry.target);
    });
}, portfolioOptions);

portfolioObserver.observe(portfolio);