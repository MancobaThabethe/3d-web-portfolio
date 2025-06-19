import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./OptimizedRoom"
import HeroLights from "./HeroLights"


function HeroExperience() {
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"})
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
    return (
    <Canvas camera={{ position: [0, 10, 15], fov: 45 }} style={{ width: isMobile ? "100vw" : "800px", height: isMobile ? "500px" : "900px" }}>
        <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 5} />
        
        <HeroLights />
        <group rotation={[0, -Math.PI / 4, 0]} position={isMobile ? [0, -1, 0] : [0, -2, 0]}>
            <Room />
        </group>
    </Canvas>
  )
}
export default HeroExperience