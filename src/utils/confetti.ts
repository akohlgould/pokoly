// Ultra-lightweight procedural confetti celebration engine
// Zero external libraries, smooth 60fps canvas bursts

export function launchConfetti(originX = 0.5, originY = 0.5) {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ['#06b6d4', '#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
  const particleCount = 75;

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    vRot: number;
    life: number;
    maxLife: number;
  }

  const particles: Particle[] = [];
  const startX = originX * width;
  const startY = originY * height;

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 12 + 4;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 15,
      life: 0,
      maxLife: Math.random() * 40 + 60,
    });
  }

  let animationFrame: number;

  function render() {
    ctx?.clearRect(0, 0, width, height);
    let alive = false;

    for (const p of particles) {
      p.life++;
      if (p.life < p.maxLife) {
        alive = true;
        p.vy += 0.35; // Gravity
        p.vx *= 0.98; // Drag
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = alpha;
        ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx!.restore();
      }
    }

    if (alive) {
      animationFrame = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  render();
}
