import { useEffect, useRef, useState } from "react";
import {
    Color,
    Mesh,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    ShaderMaterial,
    WebGLRenderer,
} from "three";
import styles from "./HeroBackground.module.scss";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!media.matches) {
            setShouldAnimate(true);
        }
    }, []);

    useEffect(() => {
        if (!shouldAnimate) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new WebGLRenderer({ canvas, antialias: true });
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            45,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            100
        );
        camera.position.z = 1;

        const geometry = new PlaneGeometry(2, 2);

        const style = getComputedStyle(document.documentElement);
        const color1 = new Color(style.getPropertyValue("--surface").trim());
        const color2 = new Color(style.getPropertyValue("--bg").trim());

        const material = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: color1 },
                uColor2: { value: color2 },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                varying vec2 vUv;
                void main() {
                    float wave = sin((vUv.x + uTime * 0.05) * 6.2831) * 0.02;
                    vec3 color = mix(uColor1, uColor2, vUv.y + wave);
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
        });

        const mesh = new Mesh(geometry, material);
        scene.add(mesh);

        const handleResize = () => {
            const { clientWidth, clientHeight } = canvas;
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        let frameId: number;
        const animate = (time: number) => {
            material.uniforms.uTime.value = time / 1000;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, [shouldAnimate]);

    if (!shouldAnimate) {
        return (
            <picture>
                <source srcSet="/hero-bg-dark.svg" media="(prefers-color-scheme: dark)" />
                <img
                    className={styles.image}
                    src="/hero-bg-light.svg"
                    alt=""
                    aria-hidden="true"
                />
            </picture>
        );
    }

    return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
