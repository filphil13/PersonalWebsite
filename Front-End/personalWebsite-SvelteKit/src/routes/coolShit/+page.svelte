<script>
	import { onMount } from "svelte";
    import p5 from "p5";

    let canvas

    class Grid {
        initialize(width, height) {
            this.width = width;
            this.height = height;
            this.grid = new Array(width * height).fill(0);
        }

        // Allow us to clear the canvas
        clear() {
            this.grid = new Array(this.width * this.height).fill(0);
        }

        // Allow us to set a specific particle
        set(x, y, color) {
            this.grid[y * this.width + x] = color;
        }

        // Allow us to swap two particles (or space)
        swap(a, b) {
            const temp = this.grid[a];
            this.grid[a] = this.grid[b];
            this.grid[b] = temp;
        }

        // Check if a particle exists in a space
        isEmpty(index) {
            return this.grid[index] === 0;
        }

        updatePixel(i) {
            // Get the indices of the pixels directly below
            const below = i + this.width;
            const belowLeft = below - 1;
            const belowRight = below + 1;

            // If there are no pixels below, including diagonals, move it accordingly.
            if (this.isEmpty(below)) {
                this.swap(i, below);
            } else if (this.isEmpty(belowLeft)) {
                this.swap(i, belowLeft);
            } else if (this.isEmpty(belowRight)) {
                this.swap(i, belowRight);
            }
        }

        update() {
            // Draw from the end of the list to the beginning
            for (let i = this.grid.length - this.width - 1; i > 0; i--) {
                this.updatePixel(i);
            }
        }
}

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
})
}, canvas) 
</script>

<h1> SAND SIMULATOR </h1>
<canvas></canvas>