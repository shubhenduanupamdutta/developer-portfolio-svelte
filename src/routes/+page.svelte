<script lang="ts">
	import { AboutMeSection, HeroSection, SkillsSection } from '$components';
	import MyWorkSection from '$components/Sections/MyWorkSection.svelte';

	const { data } = $props();
	// $inspect(data);

	let { workExperience, projects, skills } = data;
	$inspect(skills);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
