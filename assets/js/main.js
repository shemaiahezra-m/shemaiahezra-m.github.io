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
        title: "Selected Work",
        meta: "MakiKonek, PICKLED, PUP Dash, Portfolio Website",
        count: "4 project exhibits",
    },
    creative: {
        title: "Creative Archive",
        meta: "Publication materials, social graphics, church creatives, posters",
        count: "6 visual collections",
    },
    experience: {
        title: "Experience",
        meta: "Leadership, data work, public service, multimedia team records",
        count: "6 archived records",
    },
    certifications: {
        title: "Certifications",
        meta: "Academic, leadership, civic, research, and learning documents",
        count: "6 credential files",
    },
    about: {
        title: "About Me",
        meta: "Personal story, design journey, frontend path, interests, philosophy",
        count: "Personal notes",
    },
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
    archiveBooks.forEach((item) => item.classList.toggle("is-opening", item === book));
    libraryStage.classList.add("is-entering", "has-preview");
    updatePreview(book);

    window.setTimeout(() => {
        window.location.href = book.href;
    }, 420);
};

archiveBooks.forEach((book) => {
    book.addEventListener("mouseenter", () => updatePreview(book));
    book.addEventListener("focus", () => updatePreview(book));
    book.addEventListener("mouseleave", resetPreview);
    book.addEventListener("blur", resetPreview);
    book.addEventListener("click", (event) => enterCollection(event, book));
});
