(() => {
  const projects = {
    playform: {
      title: "Playform",
      tagline: "Spaces with a point of view",
      category: "Web Development",
      status: "In progress",
      kind: "placeholder",
      overview: ["Playform is a web project in progress. More details will be added as it develops."],
      facts: [{ label: "Type", value: "Web project" }, { label: "Status", value: "In progress" }]
    },
    "sidequest-bento-layout": {
      title: "Sidequest — Bento Layout",
      tagline: "An interactive website with a bento-style layout.",
      category: "Web Development",
      status: "Live",
      kind: "iframe",
      preview: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html",
      overview: ["An interactive bento-style website published as part of the Web Development sidequest."],
      facts: [{ label: "Type", value: "Interactive website" }, { label: "Status", value: "Live" }],
      links: [{ label: "Open live website", href: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html" }]
    },
    matrack: {
      title: "MATrack",
      tagline: "A web application for tracking materials and managing inventory.",
      category: "Web Development",
      status: "Live",
      kind: "image",
      preview: "assets/images/projects/matrack.png",
      overview: ["MATrack helps manage material inventory and logistics through a web application."],
      facts: [{ label: "Type", value: "Web application" }, { label: "Status", value: "Live" }],
      links: [{ label: "Open live website", href: "https://matrack.freedev.app/" }]
    },
    makikonek: {
      title: "MakiKonek",
      tagline: "Digital portal for barangay services.",
      category: "Web Development",
      status: "Repository",
      kind: "image",
      preview: "assets/images/projects/makikonek.png",
      overview: ["A digital portal that helps residents access barangay services."],
      facts: [{ label: "Year", value: "2026" }, { label: "Role", value: "Frontend / UI" }, { label: "Status", value: "Repository" }],
      links: [{ label: "View repository", href: "https://github.com/MNJ-S/MakiKonek" }]
    },
    pickled: {
      title: "PICKLED",
      tagline: "A booking system for courts and sessions.",
      category: "Web Development",
      status: "Live",
      kind: "image",
      preview: "assets/images/projects/pickled.png",
      overview: ["A booking management system for court sessions and events."],
      facts: [{ label: "Year", value: "2026" }, { label: "Role", value: "Full-stack" }, { label: "Status", value: "Live" }],
      links: [{ label: "Visit website", href: "https://pickled.freedev.app/" }]
    },
    camerent: {
      title: "CameRent",
      tagline: "A website for browsing and renting cameras.",
      category: "Web Development",
      status: "Live",
      kind: "image",
      preview: "assets/images/projects/camerent.png",
      overview: ["A camera rental website with an online catalog and booking flow."],
      facts: [{ label: "Year", value: "2025" }, { label: "Role", value: "Frontend / UI" }, { label: "Status", value: "Live" }],
      links: [{ label: "Visit website", href: "https://shemaiahezra-m.github.io/CameRent/" }]
    },
    "pup-dash": {
      title: "PUP Dash",
      tagline: "An educational 2D game built with Python.",
      category: "Game Development",
      status: "Repository",
      kind: "image",
      preview: "assets/images/projects/pup-dash.png",
      overview: ["An educational game built in Python, with a focus on gameplay and game interface design."],
      facts: [{ label: "Year", value: "2025" }, { label: "Role", value: "Game UI / Dev" }, { label: "Status", value: "Repository" }],
      builtWith: "Python",
      links: [{ label: "View repository", href: "https://github.com/shemaiahezra-m/PUP-Dash" }]
    },
    "instax-mini-evo": {
      title: "Instax Mini Evo",
      tagline: "A product website prototype for the Instax Mini Evo.",
      category: "UI/UX & Prototypes",
      status: "Figma prototype",
      kind: "image",
      preview: "assets/images/projects/instax-mini-evo.png",
      overview: ["A product website concept for the Instax Mini Evo camera. Explore the interactive prototype in Figma."],
      facts: [{ label: "Type", value: "Product website prototype" }, { label: "Status", value: "Figma prototype" }],
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
  setText("#project-title", project.title);
  setText("#project-description", project.tagline);
  setText("#project-category", project.category);
  document.title = `${project.title} | Work — Shemaiah Ezra`;

  const meta = document.querySelector("#project-meta");
  [project.status].filter(Boolean).forEach((value) => {
    const item = document.createElement("span");
    item.textContent = value;
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
    const number = document.createElement("span");
    number.textContent = "02 / WEB DEVELOPMENT";
    const title = document.createElement("strong");
    title.textContent = project.title;
    const subtitle = document.createElement("small");
    subtitle.textContent = project.tagline;
    preview.append(number, title, subtitle);
  } else if (project.kind === "iframe") {
    const frame = document.createElement("iframe");
    frame.src = project.preview;
    frame.title = `${project.title} live preview`;
    frame.loading = "lazy";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    preview.append(frame);
  } else {
    const image = document.createElement("img");
    image.src = project.preview;
    image.alt = `${project.title} project screenshot`;
    image.fetchPriority = "high";
    preview.append(image);
  }

  const overview = document.querySelector("#project-overview");
  project.overview.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    overview.append(node);
  });

  if (project.facts?.length) {
    const factsSection = document.querySelector("#project-info-section");
    const facts = document.querySelector("#project-facts");
    project.facts.forEach(({ label, value }) => {
      const item = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      item.append(term, description);
      facts.append(item);
    });
    factsSection.hidden = false;
  }

  if (project.builtWith) {
    setText("#project-built", project.builtWith);
    document.querySelector("#project-built-section").hidden = false;
  }
})();
