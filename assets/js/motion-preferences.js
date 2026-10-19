(() => {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const update = () => document.documentElement.classList.toggle("reduce-motion", preference.matches);
  update();
  preference.addEventListener?.("change", update);
})();
