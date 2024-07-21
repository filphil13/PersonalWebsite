<script>
    import profilePic from '$lib/images/ProfilePic.jpg';

    function scrollIntoView({target}){
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: 'smooth'});
    
    }
</script>
<div class='py-10 bg-[#001d3d] flex sm:px-5'>
        <div class=' mx-auto flex flex-col justify-center items-center'>
            <div>
                <p class='text-pink-600'>Hi, my name is</p>
                <h1 class='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Filipe Madureira
                </h1>
                <h2 class='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p class='text-[#8892b0] py-4 max-w-[700px]'>
                    I am a Computer Science student with a passion for backend development. I enjoy working with databases, APIs, and server-side technologies to build robust and scalable applications. With a strong foundation in programming and problem-solving, I am eager to apply my skills and contribute to the world of backend development. Let's connect and discuss how I can bring value to your projects.
                </p>
                <div>
                    <a href="#projects" on:click={scrollIntoView}>
                        <button class="text-white group border-2 px-6 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600">
                            View Work
                            <svg class="group-hover:rotate-90 duration-150"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class="pt-20">
                <img 
                    class="border-4  border-black h-auto w-auto md:max-w-sm sm:max-w-xs rounded-full hover:scale-125 duration-200" 
                    src="{profilePic}"
                    alt="Profile Picture of Filipe Madureira"
                    aria-hidden="true"
                >
            </div>
        </div>
    </div>