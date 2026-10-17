(() => {
  const container = document.querySelector("#home");
  const labels = [...document.querySelectorAll(".physics-pill, .physics-circle")];
  if (!container || !labels.length || !window.Matter) return;

  const { Bodies, Body, Composite, Engine, Mouse, MouseConstraint } = Matter;
  const engine = Engine.create({ enableSleeping: true });
  engine.gravity.y = 0.3;

  const bodies = [];
  let walls = [];
  let width = 1;
  let height = 1;
  let frameId;

  const positions = [
    { x: 0.47, y: 0.24, angle: -0.06 },
    { x: 0.54, y: 0.20, angle: 0.1 },
    { x: 0.78, y: 0.45, angle: 0.22 },
    { x: 0.2, y: 0.51, angle: -0.16 },
    { x: 0.5, y: 0.38, angle: -0.04 },
    { x: 0.32, y: 0.18, angle: 0.12 },
    { x: 0.82, y: 0.31, angle: -0.2 },
    { x: 0.24, y: 0.29, angle: 0.08 },
    { x: 0.25, y: 0.55, angle: 0 },
    { x: 0.5, y: 0.5, angle: 0 },
    { x: 0.7, y: 0.4, angle: 0 },
    { x: 0.83, y: 0.3, angle: 0 },
  ];

  const rebuildWalls = () => {
    Composite.remove(engine.world, walls);
    const wall = { isStatic: true, friction: 0.06, restitution: 0.32 };
    walls = [
      Bodies.rectangle(width / 2, height * 0.97, width * 1.5, 24, wall),
      Bodies.rectangle(-12, height / 2, 24, height * 2, wall),
      Bodies.rectangle(width + 12, height / 2, 24, height * 2, wall),
      Bodies.rectangle(width / 2, -50, width * 1.5, 24, wall),
    ];
    Composite.add(engine.world, walls);
  };

  const resize = () => {
    const bounds = container.getBoundingClientRect();
    const previousWidth = width;
    const previousHeight = height;
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    rebuildWalls();

    if (!bodies.length) {
      labels.forEach((element, index) => {
        const pillWidth = element.offsetWidth || 150;
        const pillHeight = element.offsetHeight || 40;
        const spawn = positions[index] || { x: Math.random(), y: 0.3, angle: 0 };
        const x = Math.max(pillWidth / 2 + 6, Math.min(width - pillWidth / 2 - 6, width * spawn.x));
        const isCircle = element.classList.contains("physics-circle");
        const body = isCircle
          ? Bodies.circle(x, height * spawn.y, Math.min(pillWidth, pillHeight) / 2, {
              restitution: 0.5,
              friction: 0.05,
              frictionAir: 0.018,
              density: 0.001,
            })
          : Bodies.rectangle(x, height * spawn.y, pillWidth, pillHeight, {
              chamfer: { radius: pillHeight / 2 },
              restitution: 0.42,
              friction: 0.08,
              frictionAir: 0.018,
              density: 0.001,
            });
        Body.setAngle(body, spawn.angle);
        Body.setVelocity(body, { x: (index % 2 ? 1 : -1) * 0.45, y: 0 });
        bodies.push({ element, body, width: pillWidth, height: pillHeight });
      });
      Composite.add(engine.world, bodies.map(({ body }) => body));
      return;
    }

    bodies.forEach(({ body, width: pillWidth, height: pillHeight }) => {
      Body.setPosition(body, {
        x: Math.max(pillWidth / 2 + 4, Math.min(width - pillWidth / 2 - 4, body.position.x * width / previousWidth)),
        y: Math.max(pillHeight / 2 + 4, Math.min(height * 0.95, body.position.y * height / previousHeight)),
      });
    });
  };

  const mouse = Mouse.create(container);
  // Matter's legacy wheel handler calls preventDefault(), which blocks trackpad scrolling.
  container.removeEventListener("mousewheel", mouse.mousewheel);
  container.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  // Keep native touch scrolling on phones; desktop mouse dragging remains enabled.
  container.removeEventListener("touchmove", mouse.mousemove);
  container.removeEventListener("touchstart", mouse.mousedown);
  container.removeEventListener("touchend", mouse.mouseup);
  const drag = MouseConstraint.create(engine, {
    mouse,
    constraint: { stiffness: 0.18, damping: 0.12, render: { visible: false } },
  });
  Composite.add(engine.world, drag);

  const draw = () => {
    Engine.update(engine, 1000 / 60);
    bodies.forEach(({ body, element, width: pillWidth, height: pillHeight }) => {
      element.style.transform = `translate3d(${body.position.x - pillWidth / 2}px, ${body.position.y - pillHeight / 2}px, 0) rotate(${body.angle}rad)`;
    });
    frameId = window.requestAnimationFrame(draw);
  };

  resize();
  new ResizeObserver(resize).observe(container);
  draw();
  window.addEventListener("pagehide", () => window.cancelAnimationFrame(frameId), { once: true });
})();
