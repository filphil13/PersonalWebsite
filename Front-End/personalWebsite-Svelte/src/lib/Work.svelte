<script>
    import WorkCard from "./Work-Card.svelte";

    let company = "Company Name";
    let position = "Position";
    let duration = "Duration";
    let description = "Description";
</script>

<h1 id="work" class='bg-[#001d3d] text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6] pb-10'>
    Work Experience
</h1>

<div class="bg-[#001d3d] grid grid-cols-1 place-items-center ">
    <WorkCard 
    companyName="Cumbrae's" 
    position="Butcher" 
    duration="March 2021 - Present"
    description=" 
    - Cut and prepared meat for sale
    - Assisted customers with their orders
    - Maintained a clean and organized work environment
    "

    />
    <WorkCard 
    companyName="Cumbrae's" 
    position="" 
    duration=""
    description=""
    />
</div>

<style>

</style>
