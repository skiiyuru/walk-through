import { KeyboardControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EcctrlJoystick } from "ecctrl"
import { Suspense } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import Experience from "./components/Experience"
import Loader from "./components/Loader"
import useDeviceDetection from "./utils/hooks/useDeviceDetection"

export default function App() {
  const { isMobile } = useDeviceDetection()

  return (
    <ErrorBoundary
      fallback={(error) => (
        <div>
          <h1>We broke something 🤖</h1>
          {error && <p>Error: {error.message}</p>}
        </div>
      )}
    >
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        ]}
      >
        {isMobile && <EcctrlJoystick />}

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
          camera={{ fov: 75 }}
          onPointerDown={(e) => e.target.requestPointerLock()}
        >
          <Suspense fallback={<Loader />}>
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </ErrorBoundary>
  )
}
