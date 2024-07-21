<script>
	import {page} from '$app/stores';
</script>


<nav class='font-mono w-full h-[80px] bg-[#000814] flex justify-between items-center px-4 mb-'>
	<div>
		<h1 class='text-5xl text-[#8892b0] ml-10 '>FM</h1>
	</div>

	<div class="hidden md:inline-flex items-center">
		<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
			Resume
		</button>
		<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
			Projects
		</button>
		<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
			Contact
		</button>
		<button aria-current={$page.url.pathname === '/coolShit' ? 'page' : undefined} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
			<a href="/coolShit"> Cool Shit</a>
		</button>
	</div>
</nav>