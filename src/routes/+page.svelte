<script lang="ts">
	import { AboutMeSection, HeroSection } from '$components';

	const { data } = $props();
	$inspect(data);
</script>

<HeroSection />
<AboutMeSection />
