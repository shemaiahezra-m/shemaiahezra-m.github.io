(() => {
  const projects = {
    playform: {
      title: "Playform",
      tagline: "Spaces with a point of view",
      meta: [{ text: "In progress", emphasis: true }, { text: "Web development" }],
      kind: "placeholder",
      overview: ["Playform is a web project in progress. More details will be added as it develops."],
      features: [],
      highlights: []
    },
    "sidequest-bento-layout": {
      title: "Sidequest — Bento Layout",
      tagline: "An interactive website with a bento-style layout",
      meta: [{ text: "Web project", emphasis: true }, { text: "Live" }],
      kind: "iframe",
      preview: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html",
      overview: ["A bento-style website published as part of the Web Development sidequest."],
      features: ["Interactive website presented in a bento-style layout."],
      highlights: ["Published as part of the Web Development sidequest."],
      links: [{ label: "Open live website", href: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html" }]
    },
    matrack: {
      title: "MATrack",
      tagline: "A material tracking system for inventory and logistics",
      meta: [{ text: "Web application", emphasis: true }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/matrack.png",
      overview: ["MATrack is a web application for tracking materials and managing inventory and logistics."],
      features: ["Track materials and inventory.", "Support logistics workflows."],
      highlights: [],
      links: [{ label: "Open live website", href: "https://matrack.freedev.app/" }]
    },
    makikonek: {
      title: "MakiKonek",
      tagline: "A digital portal for barangay services",
      meta: [{ text: "Web portal", emphasis: true }, { text: "2026" }, { text: "Repository" }],
      kind: "image",
      preview: "assets/images/projects/makikonek.png",
      overview: ["MakiKonek is a digital portal that helps residents access barangay services."],
      features: ["Brings barangay services into a single digital portal."],
      highlights: [{ text: "Role", detail: "Frontend / UI" }],
      links: [{ label: "View repository", href: "https://github.com/MNJ-S/MakiKonek" }]
    },
    pickled: {
      title: "PICKLED",
      tagline: "A court and events booking management system",
      meta: [{ text: "Web application", emphasis: true }, { text: "2026" }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/pickled.png",
      overview: ["PICKLED supports court and event bookings, with scheduling and management workflows."],
      features: ["Manage court and event bookings.", "Coordinate schedules and booking records."],
      highlights: [{ text: "Role", detail: "Full-stack" }],
      links: [{ label: "Visit website", href: "https://pickled.freedev.app/" }]
    },
    camerent: {
      title: "CameRent",
      tagline: "A website for browsing and renting cameras",
      meta: [{ text: "E-commerce website", emphasis: true }, { text: "2025" }, { text: "Live" }],
      kind: "image",
      preview: "assets/images/projects/camerent.png",
      overview: ["CameRent is a camera rental website with an online catalog and booking flow."],
      features: ["Browse cameras available for rent.", "Follow an online rental booking flow."],
      highlights: [{ text: "Role", detail: "Frontend / UI" }],
      links: [{ label: "Visit website", href: "https://shemaiahezra-m.github.io/CameRent/" }]
    },
    "pup-dash": {
      title: "PUP Dash",
      tagline: "An educational 2D game built with Python",
      meta: [{ text: "Game project", emphasis: true }, { text: "2025" }, { text: "Repository" }],
      kind: "image",
      preview: "assets/images/projects/pup-dash.png",
      overview: ["PUP Dash is an educational 2D game built in Python, with a focus on gameplay and game interface design."],
      features: ["Educational 2D gameplay."],
      highlights: [{ text: "Role", detail: "Game UI / development" }],
      builtWith: [{ text: "Language", detail: "Python" }],
      links: [{ label: "View repository", href: "https://github.com/shemaiahezra-m/PUP-Dash" }]
    },
    "instax-mini-evo": {
      title: "Instax Mini Evo",
      tagline: "A product website prototype for the Instax Mini Evo",
      meta: [{ text: "UI/UX prototype", emphasis: true }, { text: "Figma prototype" }],
      kind: "image",
      preview: "assets/images/projects/instax-mini-evo.png",
      overview: ["A product website concept for the Instax Mini Evo camera."],
      features: ["Product-focused website prototype."],
      highlights: [],
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
  addList("#project-built", project.builtWith || []);
})();
