(() => {
  const clock = document.querySelector("[data-clock]");
  if (clock) {
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
  }

  if (document.querySelector(".nav-container")) {
    const nav = document.querySelector(".nav-container");
    const menuToggle = nav.querySelector(".nav-menu-toggle");
    const menuLinks = nav.querySelector(".nav-links");

    const setMenuOpen = (open) => {
      nav.classList.toggle("menu-open", open);
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      }
    };

    menuToggle?.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    menuLinks?.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuOpen(false);
    });
    document.addEventListener("pointerdown", (event) => {
      if (!nav.contains(event.target)) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    let previousY = window.scrollY;
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const movingDown = currentY > previousY;
        if (currentY < 80 || !movingDown) {
          document.body.classList.remove("nav-hidden");
        } else if (currentY - previousY > 3) {
          document.body.classList.add("nav-hidden");
        }
        previousY = currentY;
        ticking = false;
      });
    }, { passive: true });
  }

  const footerEyes = document.querySelector(".footer-eyes-row");
  if (footerEyes && window.matchMedia("(pointer: fine)").matches) {
    const pupils = footerEyes.querySelectorAll(".pupil");
    document.addEventListener("pointermove", (event) => {
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement.getBoundingClientRect();
        const dx = event.clientX - (eye.left + eye.width / 2);
        const dy = event.clientY - (eye.top + eye.height / 2);
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(6, Math.hypot(dx, dy) / 12);
        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
      });
    }, { passive: true });
  }
})();
