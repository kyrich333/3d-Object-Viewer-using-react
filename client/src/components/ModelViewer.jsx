import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage, Grid } from '@react-three/drei'
import { Suspense } from 'react'

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function LoadingBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  )
}

export default function ModelViewer({ modelUrl }) {
  return (
    <div style={{ width: '100%', height: '600px', background: '#1a1a2e' }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<LoadingBox />}>
          <Stage environment="warehouse" intensity={0.5}>
            <Model url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        <Grid infiniteGrid fadeDistance={50} />
      </Canvas>
    </div>
  )
}