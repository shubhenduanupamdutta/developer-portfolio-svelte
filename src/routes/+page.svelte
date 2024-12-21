<script lang="ts">
	import { AboutMeSection, HeroSection } from '$components';
	import MyWorkSection from '$components/Sections/MyWorkSection.svelte';

	const { data } = $props();
	// $inspect(data);

	let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
