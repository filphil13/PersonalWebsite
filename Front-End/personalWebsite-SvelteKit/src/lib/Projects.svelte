<script>
    import ProjectCard from "./Project-Card.svelte";

</script>

<h1 id="projects" class='bg-[#001d3d] text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6] pb-10'>
    Projects
</h1>

<div class="bg-[#001d3d] grid lg:grid-cols-3 sm:grid-cols-1 place-items-center">
    <ProjectCard 
        projectName="NASA Daily Wallpaper"
        projectDescription="This project is a wallpaper changer that fetches the daily astronomy picture from the NASA API and sets it as your desktop wallpaper. It uses the NASA Daily Wallpaper API to retrieve the image and then uses system-specific commands to set the image as the wallpaper."
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url="https://github.com/filphil13/NASA-Daily-Wallpaper"
    />
    
    <ProjectCard 
        projectName="Temperature Monitoring System" 
        projectDescription="Back-end server for temperature monitoring sensors. It is designed to receive temperature data from sensors and provide a centralized platform for monitoring and analyzing the collected data." 
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url = "https://github.com/filphil13/TempMonitor-Server"
    />
    
    <ProjectCard 
        projectName="Temperature Monitoring Device" 
        projectDescription="TempMonitor-Device is a temperature and humidity monitoring device built for refrigeration units. It uses a DHT sensor to read temperature and humidity data, and sends this data to a server via HTTP POST requests." 
        imgSrc="./src/assets/NASAWallpaperCard.png"
        url = "https://github.com/filphil13/TempMonitor-Device"
    />
</div>
