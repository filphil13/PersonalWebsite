export default class Grid {
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