(() => {
  const revealCollection = () => {
    const collection = document.getElementById(window.location.hash.slice(1));
    if (!collection?.matches('.milestone-collection')) return;
    collection.open = true;
    window.requestAnimationFrame(() => collection.scrollIntoView({ block: 'start' }));
  };

  revealCollection();
  window.addEventListener('hashchange', revealCollection);
})();
