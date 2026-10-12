(() => {
  const filters = [...document.querySelectorAll(".catalog-filter")];
  const cards = [...document.querySelectorAll(".catalog-card")];
  const count = document.querySelector("#catalog-count");
  const emptyState = document.querySelector("#multimedia-empty");
  const projectDetails = [...document.querySelectorAll(".project-card")];
  const categories = new Set(filters.map((filter) => filter.dataset.filter));

  function applyFilter(category, updateHash = false) {
    const selected = categories.has(category) ? category : "all";
    let visible = 0;

    filters.forEach((filter) => {
      const active = filter.dataset.filter === selected;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    cards.forEach((card) => {
      const matches = selected === "all" || card.dataset.category.split(/\s+/).includes(selected);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    if (count) count.textContent = `${String(visible).padStart(2, "0")} PROJECT${visible === 1 ? "" : "S"}`;
    if (emptyState) emptyState.hidden = visible !== 0;
    if (updateHash) history.replaceState(null, "", selected === "all" ? location.pathname : `#${selected}`);
  }

  function revealHashTarget() {
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    const details = target.closest("details");
    if (details) details.open = true;
    if (target.classList.contains("catalog-card") || details) {
      window.requestAnimationFrame(() => target.scrollIntoView({ block: "center" }));
    }
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => applyFilter(filter.dataset.filter, true));
  });

  projectDetails.forEach((project) => {
    project.addEventListener("toggle", () => {
      project.querySelector("summary").setAttribute("aria-expanded", String(project.open));
    });
  });

  window.addEventListener("hashchange", () => {
    const category = location.hash.slice(1);
    if (categories.has(category)) applyFilter(category);
    else revealHashTarget();
  });

  const initialHash = location.hash.slice(1);
  if (categories.has(initialHash)) {
    applyFilter(initialHash);
  } else {
    applyFilter("all");
    revealHashTarget();
  }
})();
