<script>
	import { onMount } from "svelte";
    import p5 from "p5";

    let canvas

onMount(() => {
    new p5((p) => {
        const SAND_COLOR = "hsl(42, 100%, 50%)";
        const BACKGROUND_COLOR = "hsl(42, 100%, 90%)";
        const WIDTH = 800;
        const HEIGHT = 800;
        const GRID_SIZE = 10;

        let grid = new Grid();
        grid.initialize(WIDTH / GRID_SIZE, HEIGHT / GRID_SIZE);

        p.setup = () => {
            canvas = p.createCanvas(WIDTH, HEIGHT);
            p.colorMode(p.HSL);
            p.background(BACKGROUND_COLOR);
        };

        p.draw = () => {
            grid.update();
            grid.grid.forEach((color, index) => {
                setPixel(p, index, color || BACKGROUND_COLOR);
            });
        };

        function setPixel(p, index, color) {
            const x = (index % grid.width) * GRID_SIZE;
            const y = p.floor(index / grid.width) * GRID_SIZE;
            p.fill(color);
            p.noStroke();
            p.rect(x, y, GRID_SIZE, GRID_SIZE);
        }

        p.onLeftClick = (x, y) => {
            let color = varyColor(p, SAND_COLOR);
            grid.set(x, y, color);
        };

        function varyColor(p, color) {
            let hue = p.floor(p.hue(color));
            let saturation = p.saturation(color) + p.floor(p.random(-20, 0));
            saturation = p.constrain(saturation, 0, 100);
            let lightness = p.lightness(color) + p.floor(p.random(-10, 10));
            lightness = p.constrain(lightness, 0, 100);
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
    });
}, canvas) 
</script>

<h1> SAND SIMULATOR </h1>
<canvas></canvas>