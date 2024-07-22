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
            const SAND_SIZE = 2
            

            p5.setup = () => {
                p5.createCanvas(WIDTH, HEIGHT);
                p5.colorMode(p5.HSL);
                p5.background(BACKGROUND_COLOUR);
                grid = new Grid();
                grid.initialize(WIDTH / GRID_SIZE, HEIGHT / GRID_SIZE);
            };
            
            p5.draw = () => {
                let start = p5.millis();
                grid.update();
                let end = p5.millis();
                let elapsed = end - start;
                console.log("This took: " + elapsed + "ms.");       
                grid.grid.forEach((colour, index) => {
                    setPixel(index, colour || BACKGROUND_COLOUR);
                });
            };
            
            
            p5.mouseDragged = () => {
                p5.frameRate(60);
                const x = p5.floor(p5.mouseX / GRID_SIZE);
                const y = p5.floor(p5.mouseY / GRID_SIZE);
                let colour = varyColour(SAND_COLOUR);

                let matrix = SAND_SIZE;
                let extent = p5.floor(matrix / 2);

                for (let i = -extent; i <= extent; i++) 
                {
                    for (let j = -extent; j <= extent; j++) 
                    {
                        if (p5.random(1) < 0.75) 
                        {
                            let col = x + i;
                            let row = y + j;
                            grid.set(col, row, colour);
                        }
                    }
                }
            };


            function setPixel(index, colour) {
                const x = (index % grid.width) * GRID_SIZE;
                const y = p5.floor(index / grid.width) * GRID_SIZE;
                p5.noStroke();
                p5.fill(colour);
                p5.square(x, y, 10);
            };
            
            function varyColour(colour) {
                let hue = p5.floor(p5.hue(colour));
                let saturation = p5.saturation(colour) + p5.floor(p5.random(-20, 0));
                saturation = p5.constrain(saturation, 0, 100);
                let lightness = p5.lightness(colour) + p5.floor(p5.random(-10, 10));
                lightness = p5.constrain(lightness, 0, 100);
                return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            };
        };
        
</script>

<section class="py-10 sm:py-5 flex flex-col items-center bg-[#001d3d]">

    <h1 class="'text-4xl sm:text-7xl py-5 font-bold text-[#ccd6f6]" > 
        SAND SIMULATOR 
    </h1>
        
    <P5 {sketch} />
</section>