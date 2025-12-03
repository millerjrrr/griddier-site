import { Center, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";

interface RotatingPhoneProps {
  screenshots: string[];
  name?: "OpenBannerPhone" | "InformationBannerPhone";
}

const RotatingPhone: React.FC<RotatingPhoneProps> = ({
  screenshots,
  name = "OpenBannerPhone",
}) => {
  const { scene } = useGLTF("/models/iPhone.glb");

  // React-safe render object
  const [renderPhone, setRenderPhone] = useState<THREE.Group | null>(null);

  // Mutable reference for rotation, materials, UV changes
  const phoneRef = useRef<THREE.Group | null>(null);
  const uvAdjusted = useRef(false);

  // Clone + UV fix (runs once)
  useEffect(() => {
    const clone = scene.clone(true);

    const screenMesh = clone.getObjectByName("LLCOsMNMwTSiaFM_0") as THREE.Mesh;
    const uv = (screenMesh.geometry as THREE.BufferGeometry).attributes
      .uv as THREE.BufferAttribute;

    // run this block only once
    if (!uvAdjusted.current) {
      for (let i = 0; i < uv.count; i++) {
        const x = uv.getX(i);
        uv.setX(i, 0.5 + (x - 0.5) * 1.5);
      }
      uv.needsUpdate = true;
      uvAdjusted.current = true;
    }

    phoneRef.current = clone; // mutable
    Promise.resolve().then(() => {
      setRenderPhone(clone);
    });
  }, [scene]);

  // Load textures
  const textures = useMemo(() => {
    return screenshots.map((src) => {
      const tex = new THREE.TextureLoader().load(src);
      // tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.x = -1;
      tex.offset.x = 1;
      return tex;
    });
  }, [screenshots]);

  // Change screenshot
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Apply new texture
  useEffect(() => {
    if (!phoneRef.current) return;

    const screenMesh = phoneRef.current.getObjectByName(
      "LLCOsMNMwTSiaFM_0"
    ) as THREE.Mesh;

    screenMesh.material = new THREE.MeshBasicMaterial({
      map: textures[index],
      toneMapped: false,
    });
  }, [index, textures]);

  // Rotation animation
  const t = useRef(0);

  let rotateFunction = (current: number) =>
    Math.PI * 0.9 + Math.sin(current * 2) * 0.2;

  let scale = 23;

  switch (name) {
    case "InformationBannerPhone":
      rotateFunction = (current: number) => {
        const value = Math.PI * 1 + Math.tan(current) * 0.2;

        return value;
      };
      scale = 22;
      break;
  }

  useFrame(() => {
    if (!phoneRef.current) return;

    t.current += 0.01;
    phoneRef.current.rotation.y = rotateFunction(t.current);
  });

  return (
    <Center key={renderPhone ? "ready" : "loading"}>
      <group scale={scale}>
        {renderPhone && <primitive object={renderPhone} />}
      </group>
    </Center>
  );
};

interface RPhoneProps {
  name?: "OpenBannerPhone" | "InformationBannerPhone";
  screenshots?: string[];
  scale?: number;
}

export const RPhone: React.FC<RPhoneProps> = ({
  scale = 300,
  screenshots = ["screenshots/Trainer.jpg"],
  name,
}) => {
  const width = Math.min(scale, window.innerWidth - 50);

  return (
    <div
      style={{
        width,
        height: width * 2.3,
        overflow: "visible",
      }}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingPhone screenshots={screenshots} name={name} />
      </Canvas>
    </div>
  );
};

export default RPhone;
