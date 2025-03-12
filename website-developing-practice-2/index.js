// Ensure GSAP is loaded
if (typeof gsap === "undefined") {
    console.error("GSAP did not load. Check your internet or CDN link.");
} else {
    console.log("GSAP Loaded Successfully.");
}

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Apply animations
gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 60%", // Adjust for earlier trigger
            toggleActions: "play none none reverse",
            // markers: true // Debugging: Shows when the trigger starts
        }
    });
});