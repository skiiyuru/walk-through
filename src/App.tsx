import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { KeyboardControls } from "@react-three/drei"
import { Suspense } from "react"
import Loader from "./components/Loader"

export default function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "skyblue",
        }}
        shadows
        camera={{ fov: 45 }}
        onPointerDown={(e) => e.target.requestPointerLock()}
      >
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}
