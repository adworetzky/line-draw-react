import './App.css';
import UIBar from './UIBar';
import Canvas from './components/Canvas';

function App() {
  const draw = (ctx) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let margin = 50;
    ctx.fillStyle = '#f1f1f1';
    ctx.fillRect(
      margin,
      margin,
      ctx.canvas.width - margin * 2,
      ctx.canvas.height - margin * 2
    );
  };

  return (
    <div className="App">
      <UIBar></UIBar>
      <Canvas draw={draw} id="canvas0" width={500} height={500}></Canvas>
    </div>
  );
}

export default App;
