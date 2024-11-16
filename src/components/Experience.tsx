import { Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import Building from "./Building"
import FirstPersonController from "./FirstPersonController"
import Ground from "./Ground"

export default function Experience() {
  return (
    <>
      {/* utilities */}
      <Perf position="top-left" />

      {/* env & lights */}
      <Environment preset="city" />

      {/* scene */}
      <Physics>
        <Ground />
        <FirstPersonController />
        <Building />
      </Physics>
    </>
  )
}
