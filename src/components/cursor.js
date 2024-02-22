import React, { useRef, useEffect } from 'react';

function CustomCursor() {
  const cursorCanvasRef = useRef(null);

  useEffect(() => {
    const cursorCanvas = cursorCanvasRef.current;
    const ctx = cursorCanvas.getContext('2d');

    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;

    const drawCursor = (x, y) => {
      const crossSize = 30; // Taille de la croix
      const gapSize = 8; // Taille de la faille
      const pixelSize = 3; // Taille des pixels

      ctx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

      // Dessiner le carré désordonné
      ctx.fillStyle = 'green';
      ctx.globalCompositeOperation = 'destination-over';

      for (let i = -gapSize; i <= gapSize; i += pixelSize) {
        // Pixels désordonnés sur chaque côté du carré
        if (Math.random() > 0.5) {
          ctx.fillRect(x + i, y - gapSize, pixelSize, pixelSize);
          ctx.fillRect(x + i, y + gapSize - pixelSize, pixelSize, pixelSize);
          ctx.fillRect(x - gapSize, y + i, pixelSize, pixelSize);
          ctx.fillRect(x + gapSize - pixelSize, y + i, pixelSize, pixelSize);
        }
        // Pixels désordonnés à l'intérieur du carré
        for (let j = -gapSize; j <= gapSize; j += pixelSize) {
          if (Math.random() > 0.5) {
            ctx.fillRect(x + i, y + j, pixelSize, pixelSize);
          }
        }
      }

      // Dessiner la croix désordonnée
      ctx.globalCompositeOperation = 'source-over';
      for (let i = -crossSize; i <= crossSize; i += pixelSize) {
        if (Math.random() > 0.5) {
          ctx.fillRect(x + i, y, pixelSize, pixelSize);
        }
        if (Math.random() > 0.5) {
          ctx.fillRect(x, y + i, pixelSize, pixelSize);
        }
      }
    };

    const updateCursorPosition = (e) => {
      drawCursor(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []); // Le tableau vide assure que l'effet s'exécute une seule fois

  return <canvas ref={cursorCanvasRef} id="cursorCanvas"></canvas>;
}
export default CustomCursor;