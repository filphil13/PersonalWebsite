<script>
    import ProjectCard from "./Project-Card.svelte";

</script>

<h1 id="projects" class='bg-[#001d3d] text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6] pb-10'>
    Projects
</h1>

<div class="bg-[#001d3d] grid lg:grid-cols-3 sm:grid-cols-1 place-items-center">
    <ProjectCard 
        projectName="NASA Daily Wallpaper" 
        projectDescription="Description 1" 
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url=""
    />
    
    <ProjectCard 
        projectName="Temperature Monitoring System" 
        projectDescription="Description 2" 
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url = ""
    />
    
    <ProjectCard 
        projectName="Temperature Monitoring Device" 
        projectDescription="Description 3" 
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url = ""
    />
</div>
