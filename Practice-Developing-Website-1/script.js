const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight * 0.85) {
            sec.classList.add("show");
        }
    });
});
