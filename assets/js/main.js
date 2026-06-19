const revealTargets = document.querySelectorAll(".card-surface, .project-card, .creative-strip article, .personal-curation");

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

const libraryStage = document.querySelector("[data-library-stage]");
const bookPreview = document.querySelector("[data-book-preview]");
const collectionReader = document.querySelector("[data-reader]");
const returnLibrary = document.querySelector("[data-return-library]");
const archiveBooks = document.querySelectorAll(".archive-book");
const collectionPanels = document.querySelectorAll(".collection-panel");

const previewContent = {
    selected: {
        title: "Selected Work",
        meta: "Featured: MakiKonek, PICKLED, PUP Dash",
        count: "4 projects inside",
    },
    creative: {
        title: "Creative Archive",
        meta: "Featured: Social Media Designs, Publication Materials, Event Branding",
        count: "7 creative collections",
    },
    experience: {
        title: "Experience",
        meta: "Featured: Leadership, data work, public service, multimedia volunteer work",
        count: "7 roles filed",
    },
    awards: {
        title: "Certifications & Achievements",
        meta: "Featured: President's Lister, Leadership Award, Best Research Paper",
        count: "Awards, certificates, and badges",
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
    bookPreview.innerHTML = `<p>${content.title}</p><h3>${content.count}</h3><span>${content.meta}<br>Open Collection -></span>`;
};

const resetPreview = () => {
    if (!libraryStage || !bookPreview || libraryStage.classList.contains("is-opening")) return;

    libraryStage.classList.remove("has-preview");
    bookPreview.innerHTML = "<p>Hover a book</p><h3>Open a Collection</h3><span>Choose one chapter from the shelf.</span>";
};

const openCollection = (book) => {
    if (!libraryStage || !collectionReader) return;

    const key = book.dataset.collection;
    updatePreview(book);
    archiveBooks.forEach((item) => item.classList.toggle("is-opening", item === book));
    libraryStage.classList.add("is-opening", "has-preview");

    window.setTimeout(() => {
        collectionPanels.forEach((panel) => {
            panel.classList.toggle("is-active", panel.dataset.panel === key);
        });
        collectionReader.classList.add("is-active");
        collectionReader.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 520);
};

archiveBooks.forEach((book) => {
    book.addEventListener("mouseenter", () => updatePreview(book));
    book.addEventListener("focus", () => updatePreview(book));
    book.addEventListener("mouseleave", resetPreview);
    book.addEventListener("blur", resetPreview);
    book.addEventListener("click", () => openCollection(book));
});

if (returnLibrary && libraryStage && collectionReader) {
    returnLibrary.addEventListener("click", () => {
        collectionReader.classList.remove("is-active");
        collectionPanels.forEach((panel) => panel.classList.remove("is-active"));
        archiveBooks.forEach((book) => book.classList.remove("is-opening"));
        libraryStage.classList.remove("is-opening");
        resetPreview();
        libraryStage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
