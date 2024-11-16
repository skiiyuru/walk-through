import { Environment, Sky } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import FirstPersonController from "./FirstPersonController"
import Ground from "./Ground"

export default function Experience() {
  return (
    <>
      {/* utilities */}
      <Perf position="top-left" />

      {/* env & lights */}
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <Environment preset="city" />

      {/* scene */}
      <Physics>
        <Ground />

        <FirstPersonController />
      </Physics>
    </>
  )
}
