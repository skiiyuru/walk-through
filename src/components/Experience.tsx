import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"

export default function Experience() {
  return (
    <>
      {/* utilities */}
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* env & lights */}
      <color args={["skyblue"]} attach={"background"} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />

      {/* scene */}
      <mesh>
        <torusKnotGeometry />
        <meshPhysicalMaterial
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          color="tomato"
          flatShading
        />
      </mesh>
    </>
  )
}
