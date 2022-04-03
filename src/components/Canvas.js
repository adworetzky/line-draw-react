import React, { useRef, useEffect } from 'react';
import './Canvas.css';

export default function Canvas(props) {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    //draw to context after here
    draw(ctx);
  }, [draw]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} {...rest}></canvas>;
    </div>
  );
}
