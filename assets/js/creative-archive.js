(() => {
  const cards = document.querySelectorAll('.creative-collection-card[aria-haspopup="dialog"]');

  const openCollection = (card) => {
    const dialog = document.getElementById(card.getAttribute('aria-controls'));
    if (!dialog || typeof dialog.showModal !== 'function') return;
    dialog.showModal();
    dialog.querySelector('.archive-dialog-close')?.focus();
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => openCollection(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCollection(card);
      }
    });
  });

  document.querySelectorAll('.archive-dialog').forEach((dialog) => {
    dialog.querySelector('.archive-dialog-close')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
