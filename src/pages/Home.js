import React, { useRef, useEffect } from 'react';
import '../App.css';
import { Canvas } from '@react-three/fiber';
import MyScene from './Homeblob'; // Adjust the import path as necessary

function Home() {
    const blobApi = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (blobApi.current) {
                const { x, y } = blobApi.current.getCurrentPosition();
                console.log('The blob is at position', { x, y });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main id="home-content">
            <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <ambientLight intensity={2} />
                <pointLight intensity={3} position={[0, 6, 0]} />
                <MyScene ref={blobApi} />
            </Canvas>
            {/* Other content goes here */}
        </main>
    );
}

export default Home;
