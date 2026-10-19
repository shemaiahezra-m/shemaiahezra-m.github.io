(() => {
  const projects = {
    playform: {
      title: "Playform",
      tagline: "Spaces with a point of view",
      meta: [{ text: "Live website", emphasis: true }, { text: "Web development" }],
      kind: "image",
      preview: "assets/images/projects/playform.svg",
      overview: ["PLAYFORM is a furniture showcase website concept centered on playful, characterful furniture and expressive interior styling. The design combines bold colors, sculptural forms, and editorial-style layouts to present furniture collections through a visually engaging and lifestyle-driven browsing experience."],
      role: "UI/UX Designer & Frontend Developer — designed and developed the website concept, focusing on visual storytelling, product presentation, layout composition, and an engaging browsing experience.",
      highlights: [
        "Developed a distinctive visual direction inspired by playful contemporary furniture and colorful interiors.",
        "Used editorial-style typography, spacious layouts, and large imagery to create a premium brand experience.",
        "Designed product cards to showcase furniture categories, descriptions, and pricing.",
        "Created a cohesive visual identity across the homepage, collection sections, and brand storytelling.",
        "Balanced expressive visuals with clear navigation and product discovery."
      ],
      features: [
        { text: "Hero Section", detail: "Introduces the brand through bold typography and lifestyle imagery." },
        { text: "Featured Collection", detail: "Highlights selected furniture pieces and product categories." },
        { text: "Product Cards", detail: "Presents product imagery, names, categories, and prices." },
        { text: "Category Navigation", detail: "Organizes furniture into seating, tables, and lighting." },
        { text: "Brand Storytelling", detail: "Communicates the brand's personality through editorial content and imagery." },
        { text: "Lifestyle Gallery", detail: "Showcases colorful interiors and furniture styling inspiration." },
        { text: "Contact Links", detail: "Provides direct access for inquiries and project collaborations." },
        { text: "Responsive Layout", detail: "Designed to present content across different screen sizes." }
      ],
      builtWith: [
        { text: "Frontend", detail: "HTML5, CSS3, JavaScript" },
        { text: "CSS Framework", detail: "Bootstrap" },
        { text: "Data & Content", detail: "JSON" },
        { text: "Visual Assets", detail: "Unsplash" }
      ],
      builtTitle: "Built with",
      links: [{ label: "View live website", href: "https://shemaiahezra-m.github.io/Web-Development/02-json/index.html" }]
    },
    "sidequest-bento-layout": {
      title: "Sidequest — Bento Layout",
      tagline: "A playful guide to cafés, activities, and local discoveries",
      meta: [{ text: "Web project", emphasis: true }, { text: "Live" }],
      kind: "iframe",
      preview: "https://shemaiahezra-m.github.io/Web-Development/01-bento-layout/index.html",
      overview: ["Sidequest! is a colorful café and activity discovery guide designed to help users explore local spots and plan their next side quest. Built with a playful bento-style layout, the website organizes places, activities, and recommendations into visually engaging sections for an intuitive browsing experience."],
      role: "UI/UX Designer & Frontend Developer — designed and developed the website's visual layout, responsive components, and interactive elements, focusing on clear content organization and an engaging user experience.",
      highlights: [
        "Applied a bento grid layout to organize content into visually distinct sections.",
        "Created a playful visual identity inspired by café hopping and spontaneous adventures.",
        "Used Bootstrap's grid system to structure the page layout.",
        "Designed reusable content cards for a consistent browsing experience.",
        "Focused on readability, visual hierarchy, and responsive presentation."
      ],
      features: [
        { text: "Bento Grid Layout", detail: "Organizes content into a structured, card-based interface." },
        { text: "Café Discovery", detail: "Showcases café destinations and recommendations." },
        { text: "Activity Highlights", detail: "Presents places and activities worth exploring." },
        { text: "Visual Content Cards", detail: "Combines imagery, labels, and descriptions for quick browsing." },
        { text: "Responsive Layout", detail: "Adapts the content arrangement to different screen sizes." },
        { text: "Interactive Elements", detail: "Uses JavaScript to support interface interactions." }
      ],
      builtWith: [
        { text: "Frontend", detail: "HTML5, CSS3, JavaScript" },
        { text: "CSS Framework", detail: "Bootstrap 5.3.2" },
        { text: "Typography", detail: "Google Fonts" },
        { text: "Development Tools", detail: "Visual Studio Code, Git, GitHub" }
      ],
      builtTitle: "Built with",
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
      overview: ["MakiKonek is a digital service portal for Barangay Makiling that centralizes community requests, document processing, announcements, and facility reservations. Developed collaboratively, the platform aims to make barangay services more accessible through an organized, user-friendly web interface for residents, administrators, and the public."],
      role: "UI/UX Designer & Frontend Developer — led the design and implementation of multiple user-facing interfaces, including the public homepage, authentication pages, resident dashboard, and service pages. Also contributed to responsive design, profile and settings interfaces, and UI testing and debugging.",
      highlights: [
        "Designed and implemented multiple public-facing and resident dashboard interfaces.",
        "Established consistent layouts and responsive styling across the platform.",
        "Collaborated with a four-member team using GitHub Issues to organize development tasks across project phases.",
        "Contributed to testing and debugging, including form validation, account settings, and password recovery.",
        "Worked on a community-centered platform intended to improve access to local government services."
      ],
      features: [
        { text: "Public Information Pages", detail: "Presents barangay information, announcements, emergency hotlines, and official profiles." },
        { text: "Resident Dashboard", detail: "Provides a centralized interface for accessing resident services and account information." },
        { text: "Document Requests", detail: "Supports document-related requests and status tracking." },
        { text: "Facility Reservations", detail: "Provides an interface for submitting and managing reservation requests." },
        { text: "User Authentication", detail: "Includes login, registration, and password recovery interfaces." },
        { text: "Profile & Account Settings", detail: "Allows residents to access and manage account details." },
        { text: "Notifications", detail: "Includes a notification panel for resident updates." },
        { text: "Admin Dashboard", detail: "Supports administrative workflows for managing users, requests, appointments, and related records." }
      ],
      builtWith: [
        { text: "Frontend", detail: "HTML, CSS, JavaScript" },
        { text: "Backend", detail: "PHP" },
        { text: "Database", detail: "Database integration (specific database engine not confirmed)" },
        { text: "Collaboration & Version Control", detail: "Git, GitHub" }
      ],
      builtTitle: "Built with",
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
      overview: ["CameRent is a camera rental web platform designed to make professional photography and videography equipment more accessible to students, photographers, content creators, and media enthusiasts. It provides a digital rental experience where users can browse equipment, compare products, manage bookings, and proceed through checkout using an interactive interface."],
      role: "UI/UX Designer & Developer — contributed to the website's interface design, front-end development, and system functionality, focusing on usability, responsive layouts, and a streamlined rental experience.",
      highlights: [
        "Designed a complete camera rental platform with user and admin interfaces.",
        "Developed an end-to-end rental workflow, from product discovery to checkout and booking management.",
        "Implemented product comparison to help users evaluate camera equipment.",
        "Created an admin dashboard for managing users, rental orders, bookings, and inventory.",
        "Integrated front-end interactions with Python and SQLite for application functionality and data management."
      ],
      features: [
        { text: "Camera Catalog", detail: "Displays available equipment with detailed product specifications and rental information." },
        { text: "Product Comparison", detail: "Allows users to compare camera equipment before making a rental decision." },
        { text: "Cart & Checkout", detail: "Supports a structured rental checkout process." },
        { text: "Booking Management", detail: "Organizes rental bookings and related records." },
        { text: "User Authentication", detail: "Includes login, registration, password recovery, and profile management pages." },
        { text: "Admin Dashboard", detail: "Provides tools for monitoring users, orders, bookings, and inventory." },
        { text: "Rental Information", detail: "Includes rental agreements, FAQs, terms of use, and resource pages." },
        { text: "Interactive Interface", detail: "Combines dynamic front-end behavior with a consistent website layout." }
      ],
      builtWith: [
        { text: "Frontend", detail: "HTML5, CSS3, JavaScript" },
        { text: "Backend", detail: "Python" },
        { text: "Database", detail: "SQLite" },
        { text: "Development Tools", detail: "Visual Studio Code, Git, GitHub" },
        { text: "Deployment", detail: "GitHub Pages" }
      ],
      builtTitle: "Built with",
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
      overview: ["Instax Mini Evo is a product website prototype centered on Fujifilm's hybrid instant camera. The concept explores how product information, visual storytelling, and focused page layouts can work together to create an engaging product discovery experience."],
      role: "UI/UX Designer — designed the product website concept and interactive prototype, focusing on visual hierarchy, product presentation, and a cohesive browsing experience.",
      highlights: [
        "Created a focused landing page concept for a specific camera product.",
        "Explored visual storytelling through product imagery and information layout.",
        "Designed an interactive prototype to demonstrate the intended user experience.",
        "Used Figma to communicate the website concept and interface flow."
      ],
      features: [
        { text: "Product Showcase", detail: "Highlights the Instax Mini Evo through a product-focused presentation." },
        { text: "Product Information", detail: "Organizes key product details into a clear browsing experience." },
        { text: "Visual Storytelling", detail: "Uses imagery and layout to emphasize the camera's design and appeal." },
        { text: "Interactive Prototype", detail: "Allows users to explore the proposed interface through Figma." }
      ],
      builtWith: [
        { text: "UI/UX Design", detail: "Figma" },
        { text: "Prototyping", detail: "Figma Interactive Prototypes" }
      ],
      builtTitle: "Built with",
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
