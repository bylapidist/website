"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext("webgl");
        if (!gl) return;

        const resize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const vertexSrc = `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentSrc = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;
            void main() {
                vec2 st = gl_FragCoord.xy / u_resolution;
                float pct = 0.3 + 0.2 * sin(u_time * 0.0002 + st.x * 3.1415);
                gl_FragColor = vec4(0.1 + pct, 0.1 + pct, 0.2 + pct, 1.0);
            }
        `;

        const compile = (type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) throw new Error("shader");
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };
        const vert = compile(gl.VERTEX_SHADER, vertexSrc);
        const frag = compile(gl.FRAGMENT_SHADER, fragmentSrc);
        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);
        // eslint-disable-next-line react-compiler/react-compiler
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                1, -1,
                -1, 1,
                -1, 1,
                1, -1,
                1, 1,
            ]),
            gl.STATIC_DRAW,
        );

        const position = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        const timeLoc = gl.getUniformLocation(program, "u_time");
        const resLoc = gl.getUniformLocation(program, "u_resolution");
        if (!timeLoc || !resLoc) return;

        let frame = 0;
        const render = (now: number) => {
            gl.uniform1f(timeLoc, now);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            frame = requestAnimationFrame(render);
        };

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (!prefersReduced) {
            frame = requestAnimationFrame(render);
        } else {
            render(0); // draw one frame
        }

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.background} aria-hidden />;
}

