(() => {
  const workPage = document.querySelector(".work-catalog-page");
  if (!workPage) return;

  const cards = [...workPage.querySelectorAll(".project-card")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    workPage.classList.add("work-motion-ready");
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -32px 0px" });
    cards.forEach((card) => revealObserver.observe(card));
  }

  const sectionLinks = [...workPage.querySelectorAll(".catalog-section-nav a")];
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!reduce && "IntersectionObserver" in window && sections.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach((link) => {
        const active = link.hash === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { threshold: [.25, .5], rootMargin: "-18% 0px -55% 0px" });
    sections.forEach((section) => activeObserver.observe(section));
  }

  cards.forEach((card) => {
    const summary = card.querySelector("summary");
    const preview = summary?.querySelector(".catalog-visual");
    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      const slug = card.dataset.projectSlug;
      if (!slug) return;
      if (preview && !reduce && "startViewTransition" in document) {
        preview.style.viewTransitionName = "project-visual";
        try { sessionStorage.setItem("portfolio-project-transition", slug); } catch (_) {}
      }
      location.href = `project.html?project=${encodeURIComponent(slug)}`;
    });
  });
})();
