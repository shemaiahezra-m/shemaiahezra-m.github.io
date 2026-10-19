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
      overview: ["MATrack is a web-based department materials inventory system designed to organize material records, manage borrower information, and track inventory-related transactions. It features a centralized dashboard and dedicated modules for managing materials, borrowers, and transactions, with PostgreSQL integration for database-backed operations."],
      role: "Developer & UI/UX Designer — developed the application's interface and inventory management modules, focusing on usability, organized workflows, and consistent page layouts.",
      highlights: [
        "Built a modular inventory management system using PHP and PostgreSQL.",
        "Designed a consistent interface with a shared layout and right-side form drawers.",
        "Implemented database-backed operations for managing materials, borrowers, and transactions.",
        "Created a dashboard for inventory summaries, recent transactions, and stock status.",
        "Added input validation and safeguards for inventory quantities and transaction records."
      ],
      features: [
        { text: "Dashboard", detail: "Displays inventory summaries, recent transactions, and inventory status." },
        { text: "Materials Management", detail: "Supports creating, viewing, editing, and deleting material records." },
        { text: "Borrower Management", detail: "Organizes borrower details, contact information, and departments." },
        { text: "Transaction Management", detail: "Records additions, borrowings, returns, and material usage." },
        { text: "Database Integration", detail: "Connects to PostgreSQL for persistent data storage." },
        { text: "Form Validation", detail: "Validates transaction inputs and enforces database constraints." },
        { text: "Preview Mode", detail: "Displays sample data when the application is running without an active database connection." }
      ],
      builtWith: [
        { text: "Frontend", detail: "HTML, CSS" },
        { text: "Backend", detail: "PHP" },
        { text: "Database", detail: "PostgreSQL, SQL" },
        { text: "Development Tools", detail: "Git, GitHub" },
        { text: "Deployment", detail: "InfinityFree" }
      ],
      builtTitle: "Built with",
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
      overview: ["PUP Dash! is a fast-paced campus delivery game inspired by student life at the Polytechnic University of the Philippines – Sto. Tomas Campus. Players take on the role of Pio P., a student helper tasked with collecting keys and requested items and delivering them to the correct classrooms before time runs out."],
      role: "Lead Designer & Programmer — contributed to the game's visual design, gameplay programming, and overall player experience.",
      features: [
        { text: "Randomized Requests", detail: "Introduces varying delivery tasks for replayable gameplay." },
        { text: "Click-to-Move Controls", detail: "Enables simple and accessible navigation." },
        { text: "Item Collection & Delivery", detail: "Challenges players to collect the correct keys and items and deliver them to designated classrooms." },
        { text: "Time-Based Challenges", detail: "Encourages quick decisions and efficient movement." },
        { text: "Scoring & Strike System", detail: "Rewards successful deliveries and penalizes mistakes or delays." },
        { text: "Scoreboard", detail: "Tracks high scores across gameplay sessions." }
      ],
      highlights: [
        "Campus-inspired concept based on real student experiences.",
        "Fast-paced gameplay that challenges players to manage time and complete requests.",
        "Collaborative development with a student team from PUP Sto. Tomas Campus."
      ],
      builtWith: [
        { text: "Game Development", detail: "Python, Pygame" },
        { text: "Version Control", detail: "Git, GitHub" },
        { text: "Distribution", detail: "itch.io" }
      ],
      builtTitle: "Built with",
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

  if (project.role) {
    const role = document.querySelector("#project-role");
    const paragraph = document.createElement("p");
    paragraph.textContent = project.role;
    role.append(paragraph);
    role.closest(".project-detail-section").hidden = false;
  }

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
  if (project.builtWith?.length) {
    builtRows.closest(".project-detail-section").hidden = false;
    if (project.builtTitle) setText("#project-built-title", project.builtTitle);
  }
})();
