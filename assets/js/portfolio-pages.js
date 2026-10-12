(() => {
  const clock = document.querySelector("[data-clock]");
  if (!clock) return;

  const updateClock = () => {
    const now = new Date();
    clock.dateTime = now.toISOString();
    clock.textContent = new Intl.DateTimeFormat("en-PH", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Manila",
    }).format(now);
  };

  updateClock();
  window.setInterval(updateClock, 60_000);
})();
