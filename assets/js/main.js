const revealTargets = document.querySelectorAll(".card-surface, .project-card, .creative-strip article, .personal-curation, .archive-collection, .exhibit-placard, .art-panel, .record-file, .credential-document, .note-sheet");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

const heroArchiveCards = document.querySelectorAll("[data-archive-card]");

const selectHeroArchiveCard = (selectedCard) => {
    const shouldCollapse = selectedCard.classList.contains("is-selected");

    heroArchiveCards.forEach((card) => {
        const isSelected = !shouldCollapse && card === selectedCard;
        card.classList.toggle("is-selected", isSelected);
        card.setAttribute("aria-pressed", String(isSelected));
    });
};

heroArchiveCards.forEach((card) => {
    card.addEventListener("click", () => selectHeroArchiveCard(card));
    card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;

        event.preventDefault();
        selectHeroArchiveCard(card);
    });
});

const libraryStage = document.querySelector("[data-library-stage]");
const bookPreview = document.querySelector("[data-book-preview]");
const archiveBooks = document.querySelectorAll(".archive-book");

const previewContent = {
    selected: {
        title: "Digital Projects",
        meta: "Web development, UI/UX, frontend builds, and game development",
        count: "4 digital projects",
        volume: "Volume 01",
    },
    creative: {
        title: "Creative Archive",
        meta: "Publication materials, social graphics, church creatives, posters",
        count: "6 visual collections",
        volume: "Volume 02",
    },
    experience: {
        title: "About & Experience",
        meta: "Profile, journey, education, leadership, creative foundation, and skills",
        count: "Profile record",
        volume: "Volume 03",
    },
    milestones: {
        title: "Milestones",
        meta: "Talks, recognitions, certificates, film distinctions, and service records",
        count: "5 milestone records",
        volume: "Volume 04",
    },
    about: {
        title: "Motion Archive",
        meta: "Video editing, AVPs, event recaps, reels, and visual storytelling",
        count: "Video records",
        volume: "Volume 05",
    },
};

let volumePagePreview;

const renderVolumePage = (book) => {
    if (!libraryStage) return;

    const content = previewContent[book.dataset.collection];

    if (!volumePagePreview) {
        volumePagePreview = document.createElement("div");
        volumePagePreview.className = "volume-page-preview";
        volumePagePreview.setAttribute("aria-hidden", "true");
        libraryStage.appendChild(volumePagePreview);
    }

    volumePagePreview.innerHTML = `<p>Archive</p><span>${content.volume}</span><h3>${content.title}</h3><small>${content.count}</small>`;
};

const updatePreview = (book) => {
    if (!libraryStage || !bookPreview) return;

    const key = book.dataset.collection;
    const content = previewContent[key];
    const stageBox = libraryStage.getBoundingClientRect();
    const bookBox = book.getBoundingClientRect();
    const lightX = ((bookBox.left + bookBox.width / 2 - stageBox.left) / stageBox.width) * 100;

    libraryStage.classList.add("has-preview");
    libraryStage.style.setProperty("--light-x", `${lightX}%`);
    bookPreview.innerHTML = `<p>${content.title}</p><h3>${content.count}</h3><span>${content.meta}<br>Enter Collection -></span>`;
};

const resetPreview = () => {
    if (!libraryStage || !bookPreview || libraryStage.classList.contains("is-entering")) return;

    libraryStage.classList.remove("has-preview");
    bookPreview.innerHTML = "<p>Hover a book</p><h3>Enter a Collection</h3><span>Choose one chapter from the shelf.</span>";
};

const enterCollection = (event, book) => {
    if (!libraryStage || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    renderVolumePage(book);
    archiveBooks.forEach((item) => item.classList.toggle("is-opening", item === book));
    libraryStage.classList.add("is-entering", "is-pulling-volume", "has-preview");
    updatePreview(book);

    window.setTimeout(() => {
        libraryStage.classList.add("is-opening-volume");
    }, 360);

    window.setTimeout(() => {
        window.location.href = book.href;
    }, 1200);
};

archiveBooks.forEach((book) => {
    book.addEventListener("mouseenter", () => updatePreview(book));
    book.addEventListener("focus", () => updatePreview(book));
    book.addEventListener("mouseleave", resetPreview);
    book.addEventListener("blur", resetPreview);
    book.addEventListener("click", (event) => enterCollection(event, book));
});

const creativeGalleries = {
    brand: {
        title: "Brand Campaign Materials",
        meta: "Collection 01 / 2024",
        items: [
            { type: "image", src: "assets/images/brand-campaigns/lalal-co/Screenshot 2026-06-22 at 1.05.40 AM.png", title: "Lalal Co Brand Study" },
            { type: "image", src: "assets/images/brand-campaigns/lalal-co/Screenshot 2026-06-22 at 1.06.45 AM.png", title: "Lalal Co Product System" },
            { type: "image", src: "assets/images/brand-campaigns/lalal-co/Screenshot 2026-06-22 at 1.07.17 AM.png", title: "Lalal Co Campaign Detail" },
            { type: "image", src: "assets/images/brand-campaigns/lalal-co/Screenshot 2026-06-22 at 1.07.44 AM.png", title: "Lalal Co Application" },
            { type: "image", src: "assets/images/brand-campaigns/wabbles/wabbles1.png", title: "Wabbles Brand Preview" },
            { type: "image", src: "assets/images/brand-campaigns/wabbles/wabbles2.png", title: "Wabbles Visual System" },
            { type: "image", src: "assets/images/brand-campaigns/wabbles/wabbles3.png", title: "Wabbles Campaign Asset" },
        ],
    },
    campaigns: {
        title: "Social Media Campaign Materials",
        meta: "Collection 02 / 2020 - 2025",
        items: [
            { type: "link", title: "Layag Inklusibo 2022", label: "Credentials", href: "https://canva.link/8f78d95gcnmci2p" },
            { type: "link", title: "Aninag 2023", label: "DP Blast", href: "https://canva.link/8f78d95gcnmci2p" },
            { type: "link", title: "Aninag 2023", label: "Credentials", href: "https://canva.link/c7xr46maxf6izjk" },
            { type: "link", title: "Aninag 2023", label: "Platforms", href: "https://canva.link/c7xr46maxf6izjk" },
            { type: "link", title: "Comspire 2025", label: "Platforms", href: "https://canva.link/kzrntfqudr1qbhi" },
            { type: "placeholder", title: "Campaign Materials", label: "Placeholder" },
        ],
    },
    pubmats: {
        title: "Social Media Pubmats",
        meta: "Collection 03 / 2023 - 2024",
        items: [
            { type: "link", title: "SALIG Pubmats", label: "2023 - 2024", href: "https://canva.link/3fkuk9aw2lg60g3" },
            { type: "link", title: "Living Stones", label: "Pubmats", href: "https://canva.link/fby56cwv2utjuad" },
            { type: "placeholder", title: "Community Posts", label: "Placeholder" },
            { type: "placeholder", title: "Announcements", label: "Placeholder" },
            { type: "placeholder", title: "Church Media", label: "Placeholder" },
            { type: "placeholder", title: "Organization Graphics", label: "Placeholder" },
        ],
    },
    reels: {
        title: "Reels Thumbnails",
        meta: "Collection 04 / 2025",
        items: [
            { type: "link", title: "Living Stones Reels", label: "Thumbnail Collection", href: "https://canva.link/wxx8df2x8yw2xvy" },
            { type: "placeholder", title: "Reel Cover", label: "Placeholder" },
            { type: "placeholder", title: "Story Hook", label: "Placeholder" },
            { type: "placeholder", title: "Series Cover", label: "Placeholder" },
            { type: "placeholder", title: "Short-form Layout", label: "Placeholder" },
            { type: "placeholder", title: "Campaign Thumbnail", label: "Placeholder" },
        ],
    },
    frames: {
        title: "Frame Pubmats",
        meta: "Collection 05 / 2025",
        items: [
            { type: "placeholder", title: "Display Picture Frame", label: "2025" },
            { type: "placeholder", title: "DP Blast Template", label: "Frame" },
            { type: "placeholder", title: "Campaign Frame", label: "Template" },
            { type: "placeholder", title: "Event Frame", label: "Event" },
            { type: "placeholder", title: "Participation Frame", label: "Pubmat" },
            { type: "placeholder", title: "Archive Slot", label: "Pending" },
        ],
    },
    stage: {
        title: "Stage Design",
        meta: "Collection 06 / 2023",
        items: [
            { type: "image", src: "assets/images/stage-designs/cornucopia.png", title: "Cornucopia Stage Design" },
            { type: "image", src: "assets/images/stage-designs/cornucopia2.png", title: "Cornucopia Alternate Stage Design" },
        ],
    },
    jersey: {
        title: "Jersey and T-shirt Designs",
        meta: "Collection 07 / 2023 - 2025",
        items: [
            { type: "image", src: "assets/images/shirt-jersey/GREEN FRONT.PNG", title: "Green Jersey Front" },
            { type: "image", src: "assets/images/shirt-jersey/GREEN BACK.PNG", title: "Green Jersey Back" },
            { type: "image", src: "assets/images/shirt-jersey/NAVY BLUE FRONT.PNG", title: "Navy Blue Jersey Front" },
            { type: "image", src: "assets/images/shirt-jersey/NAVY BLUE BACK.PNG", title: "Navy Blue Jersey Back" },
            { type: "image", src: "assets/images/shirt-jersey/RED FRONT.PNG", title: "Red Jersey Front" },
            { type: "image", src: "assets/images/shirt-jersey/RED BACK.PNG", title: "Red Jersey Back" },
            { type: "image", src: "assets/images/shirt-jersey/VIOLET FRONT.PNG", title: "Violet Jersey Front" },
            { type: "image", src: "assets/images/shirt-jersey/VIOLET BACK.PNG", title: "Violet Jersey Back" },
            { type: "image", src: "assets/images/shirt-jersey/YELLOW FRONT.PNG", title: "Yellow Jersey Front" },
            { type: "image", src: "assets/images/shirt-jersey/YELLOW BACK.PNG", title: "Yellow Jersey Back" },
            { type: "image", src: "assets/images/shirt-jersey/IMG_0662.JPEG", title: "Shirt Mockup 01" },
            { type: "image", src: "assets/images/shirt-jersey/IMG_0663.JPEG", title: "Shirt Mockup 02" },
            { type: "image", src: "assets/images/shirt-jersey/IMG_1568.JPEG", title: "Shirt Mockup 03" },
            { type: "image", src: "assets/images/shirt-jersey/IMG_1572.JPEG", title: "Shirt Mockup 04" },
        ],
    },
    cocreated: {
        title: "Co-Created Projects",
        meta: "Collection 08 / 2023 - 2025",
        items: [
            { type: "placeholder", title: "Computer Society Bulletin Board", label: "Collaborative" },
            { type: "placeholder", title: "General Assembly 2024 Display Picture Frame", label: "Frame" },
            { type: "placeholder", title: "MIL Film Festival Poster", label: "Poster" },
            { type: "placeholder", title: "Shared Production Support", label: "Archive" },
            { type: "placeholder", title: "Organization Materials", label: "Design" },
            { type: "placeholder", title: "Pending Filed Assets", label: "Soon" },
        ],
    },
};

const creativeCards = document.querySelectorAll("[data-gallery]");
let activeGalleryTrigger = null;

const closeCreativeGallery = () => {
    const modal = document.querySelector("[data-creative-gallery-modal]");
    if (!modal) return;

    modal.remove();
    document.body.classList.remove("gallery-is-open");
    activeGalleryTrigger?.focus();
};

const renderGalleryItem = (item, index) => {
    const itemNumber = String(index + 1).padStart(2, "0");

    if (item.type === "image") {
        return `
            <figure class="creative-gallery-item">
                <img src="${item.src}" alt="${item.title}">
                <figcaption><span>${itemNumber}</span>${item.title}</figcaption>
            </figure>
        `;
    }

    if (item.type === "link") {
        return `
            <a class="creative-gallery-item creative-gallery-link" href="${item.href}" target="_blank" rel="noreferrer">
                <div class="creative-gallery-placeholder"><span>${item.label}</span></div>
                <strong>${item.title}</strong>
                <em>Open Link</em>
            </a>
        `;
    }

    return `
        <article class="creative-gallery-item">
            <div class="creative-gallery-placeholder"><span>${item.label}</span></div>
            <figcaption><span>${itemNumber}</span>${item.title}</figcaption>
        </article>
    `;
};

const openCreativeGallery = (key, trigger) => {
    const gallery = creativeGalleries[key];
    if (!gallery) return;

    closeCreativeGallery();
    activeGalleryTrigger = trigger;

    const modal = document.createElement("div");
    modal.className = "creative-gallery-modal";
    modal.dataset.creativeGalleryModal = "";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "creative-gallery-title");
    modal.innerHTML = `
        <div class="creative-gallery-backdrop" data-gallery-close></div>
        <section class="creative-gallery-panel">
            <header class="creative-gallery-header">
                <div>
                    <p>${gallery.meta}</p>
                    <h2 id="creative-gallery-title">${gallery.title}</h2>
                    <span>${gallery.items.length} filed items</span>
                </div>
                <button type="button" class="creative-gallery-close" data-gallery-close aria-label="Close gallery">Close</button>
            </header>
            <div class="creative-gallery-grid">
                ${gallery.items.map(renderGalleryItem).join("")}
            </div>
        </section>
    `;

    document.body.appendChild(modal);
    document.body.classList.add("gallery-is-open");
    modal.querySelector("[data-gallery-close]").focus();

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-gallery-close]")) {
            closeCreativeGallery();
        }
    });
};

creativeCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        openCreativeGallery(card.dataset.gallery, card);
    });
    card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;

        event.preventDefault();
        openCreativeGallery(card.dataset.gallery, card);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCreativeGallery();
    }
});
