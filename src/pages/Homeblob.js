import React, { useRef, useEffect, useCallback, useState, useImperativeHandle, forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Canvas, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { Vector2 } from 'three';

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

const MyScene = forwardRef((props, ref) => {
    const [vector2] = useState(() => new Vector2());

    const { width, height } = useThree(state => state.size);

    const [springs, api] = useSpring(
        () => ({
            scale: 1,
            position: [0, 0],
            color: '#ffee00',
            config: key => {
                switch (key) {
                    case 'scale':
                        return { mass: 1000, friction: 100000 };
                    case 'position':
                        return { mass: 20, friction: 1000 };
                    default:
                        return {};
                }
            },
        }),
        []
    );

    useImperativeHandle(ref, () => ({
        getCurrentPosition: () => vector2,
    }));

    const handleClick = useCallback(() => {
        let clicked = false;

        return () => {
            clicked = !clicked;
            api.start({
                color: clicked ? '#ffee00' : '#b9ff69',
            });
        };
    }, [api]);

    const handlePointerEnter = () => {
        api.start({ scale: 1.5 });
    };

    const handlePointerLeave = () => {
        api.start({ scale: 1 });
    };

    // Removed pointer move event handling

    return (
        <animated.mesh
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onClick={handleClick()}
            scale={springs.scale}
            position={[0, 0, 0]} // Fixed position
        >
            <sphereGeometry args={[8, 200, 200]} />
            <AnimatedMeshDistortMaterial speed={1.0} distort={0.6} color={springs.color} />
        </animated.mesh>
    );
});

export default MyScene;
