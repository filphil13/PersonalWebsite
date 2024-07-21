<script>
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>
