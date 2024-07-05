<script>
    export let companyName
    export let position
    export let duration
    export let description
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg my-5 mx-5 bg-[#d3d3d3]">
    <div class="px-6 py-4 ">
        <div class="font-bold text-xl mb-2 text-color1">
            {companyName}
        </div>
        <div class="text-gray-700 text-base">
            <p>{position}</p>
            <p>{duration}</p>
            <p>{description}</p>
        </div>
    </div>
</div>