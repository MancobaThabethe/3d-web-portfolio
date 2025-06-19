import { useCallback, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

function HeroLights() {
	const roomColors = useMemo(
		() => [
			"white",
			"blue",
			"red",
			"green",
			"yellow",
			"pink",
			"orange",
			"purple",
			"indigo",
			"violet",
			"cyan",
		],
		[]
	);
	const [roomColor, setRoomColor] = useState("white");

	const handleColorChange = useCallback(
		(currentColor: string) => {
			const currentIndex = roomColors.indexOf(currentColor);
			const nextIndex = (currentIndex + 1) % roomColors.length;
			setRoomColor(roomColors[nextIndex]);
		},
		[roomColors]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			handleColorChange(roomColor);
		}, 5000);
		return () => clearInterval(interval);
	}, [roomColor, handleColorChange, roomColors]);

	return (
		<>
			{/* lamp's light */}
			<spotLight
				position={[2, 5, 6]}
				angle={0.15}
				penumbra={0.2}
				intensity={100}
				color="white"
			/>
			{/* bluish overhead lamp */}
			<spotLight
				position={[4, 5, 4]}
				angle={0.3}
				penumbra={0.5}
				intensity={40}
				color="#4cc9f0"
			/>
			{/* purplish side fill */}
			<spotLight
				position={[-3, 5, 5]}
				angle={0.4}
				penumbra={1}
				intensity={60}
				color="#9d4edd"
			/>
			{/* area light for soft moody fill */}
			<primitive
				object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
				position={[1, 3, 4]}
				rotation={[-Math.PI / 4, Math.PI / 4, 0]}
				intensity={15}
			/>
			{/* subtle point light for atmospheric tone */}
			<pointLight
				position={[0, 1, 0]}
				intensity={10}
				color="#7209b7"
			/>
			<pointLight
				position={[1, 2, -2]}
				intensity={10}
				color="#0d00a4"
			/>
		</>
	);
}
export default HeroLights;
