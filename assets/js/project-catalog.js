(() => {
  const projectDetails = [...document.querySelectorAll(".project-card")];

  projectDetails.forEach((project) => {
    const summary = project.querySelector("summary");
    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      const slug = project.dataset.projectSlug;
      if (slug) location.href = `project.html?project=${encodeURIComponent(slug)}`;
    });
  });
})();
