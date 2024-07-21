<script>
    import P5 from 'p5-svelte'


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

        const sketch = (p5) => {
            let grid = new Grid();

            const SAND_COLOUR = "hsl(42, 100%, 50%)";
            const BACKGROUND_COLOUR = "hsl(42, 100%, 90%)";
            const WIDTH = 800;
            const HEIGHT = 800;
            const GRID_SIZE = 10;
            
            p5.setup = () => {
                p5.createCanvas(WIDTH, HEIGHT);
                p5.colorMode(p5.HSL);
                p5.background(BACKGROUND_COLOUR);
                grid = new Grid();
                grid.initialize(WIDTH / GRID_SIZE, HEIGHT / GRID_SIZE);
            };

            p5.draw = () => {
                grid.update();
                grid.grid.forEach((colour, index) => {
                    setPixel(p5, index, colour || BACKGROUND_COLOUR);
                });
            };

            p5.mouseClicked = () => {
                const x = p5.floor(p5.mouseX / GRID_SIZE);
                const y = p5.floor(p5.mouseY / GRID_SIZE);
                let colour = varyColour(p5, SAND_COLOUR);
                grid.set(x, y, colour);
            };


            function setPixel(p, index, colour) {
                const x = (index % grid.width) * GRID_SIZE;
                const y = p.floor(index / grid.width) * GRID_SIZE;
                p.fill(colour);
                p.noStroke();
                p.rect(x, y, GRID_SIZE, GRID_SIZE);
            };
            
            function varyColour(p, colour) {
                let hue = p.floor(p.hue(colour));
                let saturation = p.saturation(colour) + p.floor(p.random(-20, 0));
                saturation = p.constrain(saturation, 0, 100);
                let lightness = p.lightness(colour) + p.floor(p.random(-10, 10));
                lightness = p.constrain(lightness, 0, 100);
                return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            };
        };
        
</script>

<h1> SAND SIMULATOR </h1>
<P5 {sketch} />