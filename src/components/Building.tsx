// House interior by Gabriele Romagnoli [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/AQQ2g0YE2D)

import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export default function Building() {
  const model = useGLTF("/models/interior.glb")

  return (
    <RigidBody type="fixed" position={[0, 2.5, 20]} colliders="trimesh">
      <primitive object={model.scene} scale={3} rotation-y={Math.PI} />
    </RigidBody>
  )
}
