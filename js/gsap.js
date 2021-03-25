//----------------------------- Start of GSAP Animations -----------------------------//

const tl = new gsap.timeline({defaults: {ease: "power2.out"} });

tl.to(".text", {y: 0, duration: 1, stagger: 0.3});
tl.fromTo(".intro", {y: "0"}, {y: "-100%", duration: 1}, "-=0.3" );
tl.fromTo(".slider", {y: "0"}, {y: "-100%", duration: 1}, "-=0.9" );


//------------------------------ End of GSAP Animations ------------------------------//

////////////////////////////////////////////////////////////////////////////////////////