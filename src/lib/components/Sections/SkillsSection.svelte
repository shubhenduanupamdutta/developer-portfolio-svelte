<script lang="ts">
	import { SectionHeadline } from '$components';

	let { skills }: { skills: Skill[] } = $props();
</script>

<section class="mt-l">
	<SectionHeadline sectionName="skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill}
				<i class={skill.iconClass}></i>
			{/each}
		</div>
	</div>
</section>


<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skills-container {
        display: flex;
        width: 40%;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 16px;
        column-gap: 10px;
    }

    i {
        font-size: 80px;
        color: black;
    }
</style>