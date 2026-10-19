(() => {
  const hero = document.querySelector("#home");
  if (!hero) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const paletteCard = hero.querySelector(".layer-token-badge");
  const palette = [
    { name: "soft rose", main: "#f4a8cd", soft: "#f4c4e2" },
    { name: "warm coral", main: "#f3a17e", soft: "#f7c1a8" },
    { name: "sunny yellow", main: "#ffcf00", soft: "#ffe678" },
    { name: "sky blue", main: "#85ccff", soft: "#b9e3ff" }
  ];
  let paletteIndex = -1;

  const changePalette = () => {
    paletteIndex = (paletteIndex + 1) % palette.length;
    const selected = palette[paletteIndex];
    hero.style.setProperty("--home-accent", selected.main);
    hero.style.setProperty("--home-accent-soft", selected.soft);
    paletteCard?.setAttribute("aria-label", `Accent color is ${selected.name}. Activate to try the next color.`);
  };

  if (paletteCard) {
    paletteCard.addEventListener("click", changePalette);
    paletteCard.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      changePalette();
    });
  }

  const artboard = hero.querySelector(".layer-figma-wireframe");
  const output = hero.querySelector("#key-output");
  const effects = {
    move: "is-shifted",
    round: "is-rounding",
    pop: "is-popping",
    prototype: "is-prototyping",
    test: "is-testing",
    systems: "is-systems",
    ux: "is-ux",
    reframe: "is-reframing"
  };
  const principles = [...hero.querySelectorAll(".physics-pill[data-tip]")];
  const closeTips = (except) => principles.forEach((pill) => {
    if (pill === except) return;
    pill.classList.remove("is-tip-open");
    pill.setAttribute("aria-expanded", "false");
  });

  principles.forEach((pill, index) => {
    pill.setAttribute("role", "button");
    pill.tabIndex = 0;
    pill.setAttribute("aria-label", `${pill.firstChild.textContent.trim()}. Activate for a design note.`);
    pill.setAttribute("aria-expanded", "false");
    const tip = document.createElement("span");
    tip.className = "principle-tooltip";
    tip.id = `principle-tooltip-${index + 1}`;
    tip.setAttribute("role", "tooltip");
    tip.textContent = pill.dataset.tip;
    pill.append(tip);
    pill.setAttribute("aria-describedby", tip.id);

    const activate = () => {
      const isOpen = !pill.classList.contains("is-tip-open");
      closeTips(pill);
      pill.classList.toggle("is-tip-open", isOpen);
      pill.setAttribute("aria-expanded", String(isOpen));
      const effectClass = effects[pill.dataset.effect];
      if (effectClass) artboard?.classList.toggle(effectClass);
      if (pill.dataset.effect === "test" && output) output.textContent = "Prototype checked · ready for the next iteration";
    };

    pill.addEventListener("click", activate);
    pill.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        pill.classList.remove("is-tip-open");
        pill.setAttribute("aria-expanded", "false");
        pill.blur();
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      pill.click();
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".physics-pill[data-tip]")) closeTips(null);
  });

  const keyboard = hero.querySelector("#keyboard");
  keyboard?.addEventListener("pointerdown", (event) => event.target.closest(".key")?.classList.add("is-pressed"));
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    keyboard?.addEventListener(eventName, () => keyboard.querySelectorAll(".key.is-pressed").forEach((key) => key.classList.remove("is-pressed")));
  });

  const primaryAction = hero.querySelector(".primary-action");
  if (primaryAction && window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
    primaryAction.addEventListener("pointermove", (event) => {
      const bounds = primaryAction.getBoundingClientRect();
      const dx = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
      const dy = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;
      primaryAction.style.setProperty("--mag-x", `${dx * 5}px`);
      primaryAction.style.setProperty("--mag-y", `${dy * 4}px`);
    });
    primaryAction.addEventListener("pointerleave", () => {
      primaryAction.style.setProperty("--mag-x", "0px");
      primaryAction.style.setProperty("--mag-y", "0px");
    });
  }

  const visual = hero.querySelector(".hero-visual-container");
  const layers = visual ? [...visual.children].map((element) => ({
    element,
    depth: element.classList.contains("layer-keyboard") ? 1 : element.classList.contains("layer-wireframe-flow") ? .78 : element.classList.contains("layer-token-badge") ? .62 : element.classList.contains("layer-sticky-note") ? .4 : .2,
    phase: Math.random() * Math.PI * 2
  })) : [];

  if (visual && layers.length && window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let inside = false;
    let frame = 0;
    visual.addEventListener("pointermove", (event) => {
      const bounds = visual.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      targetY = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      inside = true;
    });
    visual.addEventListener("pointerleave", () => { inside = false; });

    const drift = (now) => {
      pointerX += ((inside ? targetX : 0) - pointerX) * .055;
      pointerY += ((inside ? targetY : 0) - pointerY) * .055;
      layers.forEach(({ element, depth, phase }) => {
        const idleX = Math.sin(now / 1800 + phase) * 1.8;
        const idleY = Math.cos(now / 2200 + phase) * 3.2;
        const x = idleX + pointerX * depth * 9;
        const y = idleY + pointerY * depth * 8;
        element.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
        element.style.rotate = `${(pointerX * depth * .6).toFixed(2)}deg`;
      });
      frame = requestAnimationFrame(drift);
    };
    frame = requestAnimationFrame(drift);
    window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
  }
})();
