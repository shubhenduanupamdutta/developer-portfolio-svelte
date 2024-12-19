<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionHeadLineProps {
		children: Snippet;
		sectionName: string;
	}

	let { children, sectionName }: SectionHeadLineProps = $props();
</script>

<div class="default-margin" id={sectionName}>
	<h2>{@render children()}</h2>
	<div class="underscore"></div>
</div>
