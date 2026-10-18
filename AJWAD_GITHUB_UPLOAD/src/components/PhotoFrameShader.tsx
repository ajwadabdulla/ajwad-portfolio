import React, { useEffect, useRef, useState } from 'react';

export const PhotoFrameShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobileOrFallback, setIsMobileOrFallback] = useState(false);

  useEffect(() => {
    // Check mobile or reduced motion
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsMobileOrFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL
    const gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) {
      setIsMobileOrFallback(true);
      return;
    }

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader using Deep Green (#064E3B -> 0.024, 0.306, 0.231),
    // Emerald (#10B981 -> 0.063, 0.725, 0.506 / #6EE7B7 -> 0.431, 0.906, 0.718),
    // and Gold (#C5A059 -> 0.773, 0.627, 0.349)
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.y = 1.0 - st.y;

        // Subtle organic waves
        float t = u_time * 0.4;
        float wave1 = sin(st.x * 3.0 + t + sin(st.y * 2.0 + t * 0.5));
        float wave2 = cos(st.y * 4.0 - t * 0.8 + cos(st.x * 2.5 + t));
        float blend = (wave1 + wave2) * 0.5;

        // Color definitions
        vec3 deepGreen = vec3(0.024, 0.22, 0.16);   // #064E3B deep tone
        vec3 emerald   = vec3(0.08, 0.45, 0.33);   // emerald glow
        vec3 gold      = vec3(0.773, 0.627, 0.349); // #C5A059 gold accent

        // Mix palette
        vec3 col = mix(deepGreen, emerald, smoothstep(-0.6, 0.6, blend));
        
        // Add subtle gold highlight vein along curvature
        float goldVein = smoothstep(0.75, 0.95, sin(st.x * 4.0 + st.y * 3.0 + t * 0.6));
        col = mix(col, gold, goldVein * 0.35);

        gl_FragColor = vec4(col, 0.95);
      }
    `;

    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertShader || !fragShader) {
      setIsMobileOrFallback(true);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setIsMobileOrFallback(true);
      return;
    }

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setIsMobileOrFallback(true);
      return;
    }

    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (now: number) => {
      if (document.visibilityState === 'hidden') {
        return;
      }

      const elapsed = (now - startTime) * 0.001;
      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        cancelAnimationFrame(animationFrameId);
        startTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  if (isMobileOrFallback) {
    // Static gradient fallback on mobile / reduced motion
    return (
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#064E3B] via-[#0B3A2C] to-[#122A22]"
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
