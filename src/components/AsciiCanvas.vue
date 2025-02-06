<template>
    <div class="canvas-container">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let frames = [];
let frameIndex = 0;
let interval = null;
let charWidth = 12;
let charHeight = 10;

const loadAsciiFrames = async () => {
    try {
        const response = await fetch("/src/assets/mar_contraste_ascii_frames.json");
        const text = await response.text();

        const data = JSON.parse(text);
        frames = data.frames.map(f => f.replace(/^<|>$/g, "").split("\n"));

        adjustCanvasSize();
    } catch (error) {
        console.error("Error loading ASCII frames:", error);
    }
};

const adjustCanvasSize = () => {
    if (!canvas.value || frames.length === 0) return;

    const ctx = canvas.value.getContext("2d");
    const firstFrame = frames[0];

    const screenHeight = window.innerHeight;
    const frameHeight = firstFrame.length;
    
    charHeight = screenHeight / frameHeight;
    charWidth = charHeight * (firstFrame[0].length / frameHeight);

    const frameWidth = firstFrame[0].length * charWidth;
    canvas.value.width = frameWidth;
    canvas.value.height = screenHeight;
};

const drawFrame = () => {
    if (!canvas.value || frames.length === 0) return;

    const ctx = canvas.value.getContext("2d");
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    ctx.font = `${charHeight}px monospace`; 
    ctx.fillStyle = '#d5393c';
    ctx.textBaseline = "top";

    const frame = frames[frameIndex];

    frame.forEach((line, rowIndex) => {
        [...line].forEach((char, colIndex) => {
            ctx.fillText(char, colIndex * charWidth, rowIndex * charHeight);
        });
    });

    frameIndex = (frameIndex + 1) % frames.length;
};

onMounted(async () => {
    await loadAsciiFrames();
    interval = setInterval(drawFrame, 100);
    window.addEventListener("resize", adjustCanvasSize);
});

onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener("resize", adjustCanvasSize);
});
</script>

<style>
.canvas-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

canvas {
    image-rendering: pixelated;
}
</style>
