(() => {
  const projects = {
    playform: {
      title: "Playform",
      tagline: "Spaces with a point of view",
      meta: [{ text: "In progress", emphasis: true }, { text: "Web development" }],
      kind: "placeholder",
      overview: ["Playform is a web development project exploring how a clear point of view can shape a digital space. The project is currently in progress."],
      features: ["A web experience centered on the Playform identity."],
      highlights: [{ text: "Project status", detail: "In progress" }, { text: "Focus", detail: "Web design and development" }],
      builtWith: [{ text: "Format", detail: "Web project" }]
    },
    "sidequest-bento-layout": {
      title: "Sidequest — Bento Layout",
      tagline: "An interactive website with a bento-style layout",
      meta: [{ text: "Web project", emphasis: true }, { text: "Live" }],
      kind: "iframe",
      preview: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html",
      overview: ["Sidequest is a playful Metro South adventure guide, presented in a bento-style interface. The layout gives visitors a quick way to explore destinations by neighborhood."],
      features: ["Browse destinations by neighborhood, including Makati, Alabang, and BF Homes.", "Search for destinations and save interesting spots."],
      highlights: [{ text: "Format", detail: "Interactive web design" }, { text: "Published as", detail: "Web Development sidequest" }],
      builtWith: [{ text: "Format", detail: "Responsive website" }],
      links: [{ label: "Open live website", href: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html" }]
    },
    matrack: {
      title: "MATrack",
      tagline: "A material tracking system for inventory and logistics",
      meta: [{ text: "Web application", emphasis: true }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/matrack.png",
      overview: ["MATrack is a material tracking system for keeping inventory and logistics activity in one place. Its dashboard surfaces stock, active borrowings, and recent transactions."],
      features: ["Review material totals and inventory status.", "Track active borrowings and recent activity."],
      highlights: [{ text: "Project type", detail: "Material tracking system" }, { text: "Focus", detail: "Inventory and logistics workflows" }],
      builtWith: [{ text: "Format", detail: "Web application" }],
      links: [{ label: "Open live website", href: "https://matrack.freedev.app/" }]
    },
    makikonek: {
      title: "MakiKonek",
      tagline: "A digital portal for barangay services",
      meta: [{ text: "Web portal", emphasis: true }, { text: "2026" }, { text: "Repository" }],
      kind: "image",
      preview: "assets/images/projects/makikonek.png",
      overview: ["MakiKonek is a barangay digital service portal designed to make local services easier to find and access online. The project focuses on presenting community information through a clear, approachable interface."],
      features: ["Brings barangay information and services together in one portal.", "Provides residents with a central place to explore community updates and service information."],
      highlights: [{ text: "Year", detail: "2026" }, { text: "Role", detail: "Frontend / UI" }, { text: "Project type", detail: "Barangay digital service portal" }],
      builtWith: [{ text: "Format", detail: "Web portal" }],
      links: [{ label: "View repository", href: "https://github.com/MNJ-S/MakiKonek" }]
    },
    pickled: {
      title: "PICKLED",
      tagline: "A court and events booking management system",
      meta: [{ text: "Web application", emphasis: true }, { text: "2026" }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/pickled.png",
      overview: ["PICKLED is a court and events booking management system. It brings booking, scheduling, and management workflows into a single web experience."],
      features: ["Manage court and event bookings.", "Coordinate schedules and booking records."],
      highlights: [{ text: "Year", detail: "2026" }, { text: "Role", detail: "Full-stack" }, { text: "Project type", detail: "Booking management system" }],
      builtWith: [{ text: "Format", detail: "Web application" }],
      links: [{ label: "Visit website", href: "https://pickled.freedev.app/" }]
    },
    camerent: {
      title: "CameRent",
      tagline: "A website for browsing and renting cameras",
      meta: [{ text: "E-commerce website", emphasis: true }, { text: "2025" }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/camerent.png",
      overview: ["CameRent is an e-commerce experience for renting camera equipment. The website presents rental options and guides visitors through the rental flow."],
      features: ["Browse camera rental offerings.", "Move from product discovery toward a rental booking."],
      highlights: [{ text: "Year", detail: "2025" }, { text: "Role", detail: "Frontend / UI" }, { text: "Project type", detail: "Camera rental website" }],
      builtWith: [{ text: "Format", detail: "E-commerce website" }],
      links: [{ label: "Visit website", href: "https://shemaiahezra-m.github.io/CameRent/" }]
    },
    "pup-dash": {
      title: "PUP Dash",
      tagline: "An educational 2D game built with Python",
      meta: [{ text: "Game project", emphasis: true }, { text: "2025" }, { text: "Repository" }],
      kind: "image",
      preview: "assets/images/projects/pup-dash.png",
      overview: ["PUP Dash is an educational 2D game built around a simple, approachable gameplay concept. The project combines game interface design with implementation in Python."],
      features: ["Educational 2D game experience.", "Custom game interface designed around the gameplay."],
      highlights: [{ text: "Year", detail: "2025" }, { text: "Role", detail: "Game UI / development" }, { text: "Project type", detail: "Educational 2D game" }],
      builtWith: [{ text: "Language", detail: "Python" }],
      links: [{ label: "View repository", href: "https://github.com/shemaiahezra-m/PUP-Dash" }]
    },
    "instax-mini-evo": {
      title: "Instax Mini Evo",
      tagline: "A product website prototype for the Instax Mini Evo",
      meta: [{ text: "UI/UX prototype", emphasis: true }, { text: "Figma prototype" }],
      kind: "image",
      preview: "assets/images/projects/instax-mini-evo.png",
      overview: ["An e-commerce style product website prototype for the Instax Mini Evo. The concept explores how product information and visual storytelling can work together in a focused camera landing page."],
      features: ["Product-focused presentation for the Instax Mini Evo.", "Prototype interaction available in Figma."],
      highlights: [{ text: "Project type", detail: "Product website prototype" }, { text: "Prototype", detail: "Figma" }],
      builtWith: [{ text: "Prototype", detail: "Figma" }],
      links: [{ label: "Open Figma prototype", href: "https://www.figma.com/proto/UOpbCrLi2crXRJsvMc9tLG/INSTAX-mini-Evo?node-id=152-1178&t=0jdrAe3ygvNF2zvw-1&scaling=contain&content-scaling=responsive&page-id=148%3A2&starting-point-node-id=152%3A1178" }]
    }
  };

  const project = projects[new URLSearchParams(location.search).get("project")];
  const main = document.querySelector("#project-detail");
  if (!project) {
    main.innerHTML = '<a class="project-back-link" href="projects.html">← All projects</a><section class="project-not-found"><p class="mono">PROJECT NOT FOUND</p><h1>That project isn’t here.</h1></section>';
    document.title = "Project not found | Shemaiah Ezra";
    return;
  }

  const setText = (selector, text) => { document.querySelector(selector).textContent = text || ""; };
  const addList = (selector, entries) => {
    const list = document.querySelector(selector);
    entries.forEach((entry) => {
      const item = document.createElement("li");
      if (typeof entry === "string") {
        item.textContent = entry;
      } else {
        const label = document.createElement("strong");
        const detail = document.createElement("span");
        label.textContent = entry.text;
        detail.textContent = entry.detail;
        item.append(label, detail);
      }
      list.append(item);
    });
    if (entries.length) list.closest(".project-detail-section").hidden = false;
  };

  setText("#project-title", project.title);
  setText("#project-description", project.tagline);
  document.title = `${project.title} | Work — Shemaiah Ezra`;

  const meta = document.querySelector("#project-meta");
  project.meta.forEach(({ text, emphasis }) => {
    const item = document.createElement(emphasis ? "strong" : "span");
    item.textContent = text;
    meta.append(item);
  });

  const actions = document.querySelector("#project-actions");
  (project.links || []).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = `${link.label} ↗`;
    actions.append(anchor);
  });

  const preview = document.querySelector("#project-preview");
  if (project.kind === "placeholder") {
    preview.classList.add("is-placeholder");
    const title = document.createElement("strong");
    title.textContent = project.title;
    const subtitle = document.createElement("small");
    subtitle.textContent = project.tagline;
    preview.append(title, subtitle);
    document.querySelector(".project-gallery").classList.add("is-placeholder-gallery");
    document.querySelector("#project-gallery-count").hidden = true;
  } else if (project.kind === "iframe") {
    const frame = document.createElement("iframe");
    frame.src = project.preview;
    frame.title = `${project.title} live preview`;
    frame.loading = "lazy";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    preview.append(frame);
    setText("#project-gallery-count", "Live preview");
  } else {
    const image = document.createElement("img");
    image.src = project.preview;
    image.alt = `${project.title} project screenshot`;
    image.fetchPriority = "high";
    preview.append(image);
    setText("#project-gallery-count", "1 / 1");
  }

  const overview = document.querySelector("#project-overview");
  project.overview.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    overview.append(node);
  });

  addList("#project-features", project.features || []);
  addList("#project-highlights", project.highlights || []);
  const builtRows = document.querySelector("#project-built");
  (project.builtWith || []).forEach(({ text, detail }) => {
    const row = document.createElement("tr");
    const label = document.createElement("th");
    const value = document.createElement("td");
    label.scope = "row";
    label.textContent = text;
    value.textContent = detail;
    row.append(label, value);
    builtRows.append(row);
  });
  if (project.builtWith?.length) builtRows.closest(".project-detail-section").hidden = false;
})();
