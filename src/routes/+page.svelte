<script lang="ts">
	import { AboutMeSection, HeroSection } from '$components';

	const { data } = $props();
	// $inspect(data);

	let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
