<script>
    //import profilePic from '$lib/images/ProfilePic.jpg';
    import profilePic from '$lib/images/ProfilePic3.jpg';


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
                        <button class="text-white group border-2 px-6 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600">
                            View Work
                            <svg class="group-hover:rotate-90 duration-150"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                </div>
            </div>
            <div id="profilePic" class="pt-20">
            </div>
        </div>
    </div>

    <style>
        #profilePic {
            background-image: url("./images/ProfilePic3.jpg");
            width: 75%;
            height: 500px;
            max-width: 100%;
            background-size: cover;
            -webkit-background-position: center;
            background-position: center center;
            margin: 20px;
            box-shadow: 0 5px 5px 5px rgba(13, 109, 253, 0.534);
            animation: animate 5s ease-in-out infinite;
            transition: all 1s ease-in-out;
}

@keyframes animate {
    0%, 100%{
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50%{
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
}
    </style>