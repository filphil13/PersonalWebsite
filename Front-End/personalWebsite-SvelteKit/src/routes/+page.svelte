<script>
	import Home from '../lib/Home.svelte';
	import Projects from '../lib/Projects.svelte';
	import Work from '../lib/Work.svelte';
	import Contact from '../lib/Contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Home />
	<Projects />
	<Work />
	<Contact />
</section>

