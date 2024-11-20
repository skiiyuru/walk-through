import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei"
import Ecctrl from "ecctrl"
import { useMemo } from "react"

export default function FirstPersonController() {
  const buttonsMap = useMemo<KeyboardControlsEntry[]>(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  )

  return (
    <KeyboardControls map={buttonsMap}>
      <Ecctrl
        camCollision={false}
        camInitDis={-0.01} // camera initial position
        camMinDis={-0.01}
        camFollowMult={1000}
        camLerpMult={1000}
        turnVelMultiplier={1}
        turnSpeed={100}
        mode="CameraBasedMovement"
        maxVelLimit={4}
      >
        {/* Make the box invisible */}
        <mesh scale={0.5}>
          <boxGeometry />
          <meshBasicMaterial color={"tomato"} transparent opacity={0} />
        </mesh>
      </Ecctrl>
    </KeyboardControls>
  )
}
