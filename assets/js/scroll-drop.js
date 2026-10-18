(() => {
  const targets = document.querySelectorAll(".pockets-heading, .pocket-grid .pocket");
  if (!targets.length) return;

  targets.forEach((target) => target.classList.add("scroll-drop"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  targets.forEach((target) => observer.observe(target));
})();
