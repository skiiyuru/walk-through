/* 
OPTIMIZATION:

- https://optimizeglb.com/dashboard (credits required)

*/

import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const PATH = "/models/tatu-city-house-v2.glb"

export default function Building() {
  const model = useGLTF(PATH)

  return (
    <RigidBody type="fixed" position={[0, 0.3, 50]} colliders="trimesh">
      <primitive object={model.scene} />
    </RigidBody>
  )
}

useGLTF.preload(PATH)
