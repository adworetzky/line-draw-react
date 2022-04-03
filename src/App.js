import './App.css';
import { DarkTheme, ThemeProvider } from 'baseui';
import UIBar from './components/UIBar';
import Canvas from './components/Canvas';

function App() {
  const draw = (ctx) => {
    ctx.fillStyle = '#000099';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let margin = 50;
    ctx.fillStyle = '#990000';
    ctx.fillRect(
      margin,
      margin,
      ctx.canvas.width - margin * 2,
      ctx.canvas.height - margin * 2
    );
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App" style={{ backgroundColor: '#121212' }}>
        <UIBar></UIBar>
        <Canvas draw={draw} id="canvas0" width={500} height={500}></Canvas>
      </div>
    </ThemeProvider>
  );
}

export default App;
