(() => {
  const icons = {
    email: '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    cv: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M9 13h6m-6 4h6"/></svg>',
    linkedin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6m-8 0V9"/><circle cx="5" cy="5" r="1"/></svg>',
    github: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22"/></svg>',
    instagram: '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>'
  };

  document.querySelectorAll(".framer-footer-wrapper .footer-action-buttons").forEach((nav) => {
    const links = [...nav.querySelectorAll("a")];
    const cvLink = links.find((link) => /experience\.html/.test(link.href));
    if (!cvLink) {
      const link = document.createElement("a");
      link.href = "experience.html";
      link.className = "footer-pill-btn";
      link.setAttribute("aria-label", "View CV");
      link.title = "CV";
      nav.append(link);
      links.push(link);
    }

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      let name;
      let label;
      if (href.startsWith("mailto:")) { name = "email"; label = "Email"; }
      else if (/experience\.html/.test(href)) { name = "cv"; label = "CV"; }
      else if (/linkedin\.com/.test(href)) { name = "linkedin"; label = "LinkedIn"; }
      else if (/github\.com/.test(href)) { name = "github"; label = "GitHub"; }
      else if (/instagram\.com/.test(href)) { name = "instagram"; label = "Instagram"; }
      if (!name) return;
      link.classList.add("footer-pill-btn");
      link.setAttribute("aria-label", label === "Email" ? "Email Shemaiah" : label === "CV" ? "View CV" : label);
      link.title = label;
      link.innerHTML = icons[name];
    });

    const order = ["mailto:", "experience.html", "linkedin.com", "github.com", "instagram.com"];
    [...nav.querySelectorAll("a")]
      .sort((a, b) => order.findIndex((part) => (a.getAttribute("href") || "").includes(part)) - order.findIndex((part) => (b.getAttribute("href") || "").includes(part)))
      .forEach((link) => nav.append(link));
  });
})();
