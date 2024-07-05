<script>
    export let projectName
    export let projectDescription
    export let imgSrc
    export let url
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg my-5 mx-5 bg-[#d3d3d3] hover:scale-110 duration-200">
    <a href={url}>
        <img class="w-full" src={imgSrc} alt="Project Picture" aria-hidden="true" />
        <div class="px-6 py-4 ">
            <div class="font-bold text-xl mb-2 text-color1">
                {projectName}
            </div>
            <p class="text-gray-700 text-base">
                {projectDescription}
            </p>
        </div>
    </a>
</div>