import React, { useRef } from "react";
import { useFrame, extend, Canvas } from "react-three-fiber";
import { Mesh, MeshStandardMaterial } from "three";

extend({ Canvas });

const SpinningComputer = () => {
	const mesh = useRef<Mesh | undefined>();

	useFrame(() => {
		if (mesh.current) {
			mesh.current.rotation.x += 0.01;
			mesh.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh ref={mesh as React.MutableRefObject<Mesh>}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color="blue" />
		</mesh>
	);
};

const ThreeModel = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<SpinningComputer />
		</Canvas>
	);
};

export default ThreeModel;
