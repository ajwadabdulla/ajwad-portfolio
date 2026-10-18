import React, { useEffect, useRef } from 'react';

interface Dot {
  originX: number;
  originY: number;
  offsetX: number;
  offsetY: number;
  radius: number;
  alpha: number;
}

export const DotFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isTouch = false;
    if (typeof window !== 'undefined') {
      isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pointer state (desktop only)
    const pointer = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch || prefersReducedMotion) return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let dots: Dot[] = [];
    const baseRadius = 1.4;
    const baseAlpha = 0.12;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap devicePixelRatio at 2

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Cap ~2000 dots by widening spacing on large screens
      const targetDotCount = 2000;
      const area = width * height;
      const calculatedSpacing = Math.max(28, Math.sqrt(area / targetDotCount));
      const spacing = Math.round(calculatedSpacing);

      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      const startX = (width - cols * spacing) / 2;
      const startY = (height - rows * spacing) / 2;

      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const x = startX + c * spacing;
          const y = startY + r * spacing;
          dots.push({
            originX: x,
            originY: y,
            offsetX: 0,
            offsetY: 0,
            radius: baseRadius,
            alpha: baseAlpha,
          });
        }
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Render loop
    const render = () => {
      // Pause when tab is hidden
      if (document.visibilityState === 'hidden') {
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const reactionRadius = 120; // 120px threshold
      const maxPush = 8;          // Pushed up to 8px away
      const targetRadius = 2.6;   // Dots grow to about 2.6px
      const targetAlpha = 0.35;   // Rise to about 35% opacity
      const decay = 0.07;         // Eases back over ~600ms

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (!isTouch && !prefersReducedMotion && pointer.active) {
          const dx = dot.originX - pointer.x;
          const dy = dot.originY - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < reactionRadius) {
            // Factor: 1 at center, 0 at reactionRadius
            const factor = 1 - dist / reactionRadius;
            const angle = Math.atan2(dy, dx);

            // Target displacement & growth
            const pushX = Math.cos(angle) * factor * maxPush;
            const pushY = Math.sin(angle) * factor * maxPush;
            const rad = baseRadius + (targetRadius - baseRadius) * factor;
            const alp = baseAlpha + (targetAlpha - baseAlpha) * factor;

            // Immediate reaction towards target
            dot.offsetX += (pushX - dot.offsetX) * 0.25;
            dot.offsetY += (pushY - dot.offsetY) * 0.25;
            dot.radius += (rad - dot.radius) * 0.25;
            dot.alpha += (alp - dot.alpha) * 0.25;
          } else {
            // Ease back to baseline
            dot.offsetX += (0 - dot.offsetX) * decay;
            dot.offsetY += (0 - dot.offsetY) * decay;
            dot.radius += (baseRadius - dot.radius) * decay;
            dot.alpha += (baseAlpha - dot.alpha) * decay;
          }
        } else {
          dot.offsetX += (0 - dot.offsetX) * decay;
          dot.offsetY += (0 - dot.offsetY) * decay;
          dot.radius = baseRadius;
          dot.alpha = baseAlpha;
        }

        const renderX = dot.originX + dot.offsetX;
        const renderY = dot.originY + dot.offsetY;

        ctx.fillStyle = `rgba(6, 78, 59, ${dot.alpha})`;
        ctx.beginPath();
        ctx.arc(renderX, renderY, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!isTouch && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!isTouch && !prefersReducedMotion) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else {
          render();
        }
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
