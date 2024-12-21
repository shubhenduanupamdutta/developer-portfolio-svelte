<script lang="ts">
	import { Footer, Navbar } from '$components';
	import '../app.css';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
