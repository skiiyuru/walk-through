import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"

export default function App() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      camera={
        {
          // position: [0, 0, 10],
          // fov: 45,
          // near: 0.1,
          // far: 100,
        }
      }
    >
      <Experience />
    </Canvas>
  )
}
