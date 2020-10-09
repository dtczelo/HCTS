const ratio = 0.2;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

var handleIntersect = (entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('blur-visible');
            observer.unobserve(entry.target);
        }
        console.log(entry.intersectionRatio) 
    });
};

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".blur").forEach((r) => {
    observer.observe(r)
})
