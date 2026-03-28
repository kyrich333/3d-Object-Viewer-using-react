import ModelViewer from './components/ModelViewer'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#0f0f1a', minHeight: '100vh', color: 'white' }}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>🔩 SolidWorks Model Viewer</h1>
        <p style={{ color: '#aaa' }}>Left click + drag to rotate • Scroll to zoom • Right click + drag to pan</p>
      </div>
      <ModelViewer modelUrl="/models/sigrun.glb" />
      <ModelViewer modelUrl="/models/adapter.glb" />
    </div>
    
  )
}

export default App