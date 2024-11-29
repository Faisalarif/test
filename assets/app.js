gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});


/** Section 3***/

gsap
  .timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#section3",
      pin: true,
      scrub: true,
      end: "+=3000",
      markers: false
    }
  })
  .to(".cr-v-line-cetner-bottem", {  height: "100%", duration:1, ease:"power1.out" });


/** Section 4***/

// Select the section and the inside div
const section = document.querySelector(".section4");
const insideDiv = section.querySelector(".cr-bottom-line-2");

let remainingHeight_p = "500px";

// Function to calculate remaining height
function getRemainingHeight() {
  const sectionRect = section.getBoundingClientRect(); // Get section's bounding box
  const insideDivHeight = insideDiv.offsetHeight; // Get the full height of the inside div
  const viewportHeight = window.innerHeight; // Viewport height

  // Remaining height is the part of the section still visible below the viewport
  const remainingHeight = sectionRect.bottom - viewportHeight;
  remainingHeight_p = remainingHeight+"px";
  // remainingHeight_p = insideDivHeight+"px";

  // console.log(`Remaining height: ${Math.max(remainingHeight, 0)}px`);
  // console.log(`Inside div height: ${insideDivHeight}px`);

}

// Call the function when needed
//getRemainingHeight();

window.addEventListener("scroll", getRemainingHeight);


// Optional: Add an event listener to recalculate on scroll
//window.addEventListener("scroll", getRemainingHeight);


gsap
  .timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#section4",
      pin: true,
      scrub: true,
      end: "+=3000", 
      markers: false,
      onEnter: getRemainingHeight,
    }
  })
  .to(".cr-v-line-cetner-top", {  height: "100%", duration:1, ease:"power1.out" })
  .to(".cr-bottom-line-2", {  width: "45%", duration:1, ease:"power1.out" })
  .to(".cr-bottom-angel-line1", {  height: remainingHeight_p, duration:1, ease:"linear" });


/*** Trigger Section 5 ***/

gsap
  .timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#section5",
      pin: true,
      scrub: true,
      end: "+=3000", 
      markers: false
    }
  })
  .to(".cr-top-angel-line2", {  height: "400px;", duration:1, ease:"linear" })
  .to(".cr-top-line-2", {  width: "45%", duration:1, ease:"power1.out" });


/*** Trigger Section 6 ***/

const t6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section6", 
      start: "top 100px", 
      end: "bottom center", 
      toggleActions: "play none reverse none", 
      markers: false,
    },
    defaults: { delay: 0.1 }
});

t6.from(".text-animtation-1",{ opacity: 0, fontSize:"24px", duration:1, ease:"power1.out" });
t6.from(".text-animtation-2",{ opacity: 0, marginLeft:"-80px"});


/*** Trigger Section 7 ***/

gsap
  .timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#section7",
      pin: true,
      scrub: true,
      end: "+=3000", 
      markers: false
    }
  })
  .to(".cr-animation-box", {  height: "100%", duration:1, ease:"power1.out" });

/*** Trigger Section 8 ***/

gsap
  .timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#section8",
      pin: true,
      scrub: true,
      end: "+=3000",
      markers: false
    }
  })
  .to(".cr-animation-box-t1", {  height: "100%", duration:1, ease:"power1.out" })
  .to(".cr-animation-box-b2", {  height: "100%", duration:1, ease:"power1.out" });



gsap.to(".cr-animation-box-t3", {
    scrollTrigger: {
        trigger: ".cr-animation-box-t3",
        start: "top center",
        end: "top 100px",
        scrub: 1,
        markers: false,
        toggleActions: 'play none reverse none'
    }, 
    height:"150px",
    ease: "none",
    duration:3
});


// Select the span element
const spanElement = document.querySelector(".rev-1");
let spanWidth = "378";
if(spanElement) {
    spanWidth = spanElement.offsetWidth;
}


// Create a GSAP timeline
const t9 = gsap.timeline({
    scrollTrigger: {
      trigger: "#txt-animation-2", 
      start: "top center", 
      end: "bottom center", 
      toggleActions: "play none reverse none", 
      markers: false, 
    },
    defaults: { delay: 0.8 }
});

spanWidth = "-"+spanWidth+"px";


t9.to(".rev-1", {
    duration: 2,        // Animation duration
   marginLeft: spanWidth,             
    opacity: 1,        
    ease: "power2.in", 
});

t9.to(".typing-text", {
    duration: 2.5,
    text: "requires CREO.",
    ease: "ease",
    onEnter: () => {
        document.querySelector(".cursor").classList.add("active"); // Add the class
      },
});

t9.to(".cr-animation-box-t3", {
    duration: 1,
    height: "0px",
    ease: "ease",
});


// Go top click event
document.querySelector("#go-to-top").addEventListener("click", (e) => {
    e.preventDefault(); 
    
    // Kill all GSAP ScrollTriggers and animations
    gsap.globalTimeline.clear(); // Stops any ongoing animations or timelines
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
});

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the span
document.getElementById('year').textContent = currentYear;