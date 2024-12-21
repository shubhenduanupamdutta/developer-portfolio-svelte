<script lang="ts">
	import { SectionHeadline } from '$components';
	interface MyWorkSectionProps {
		projects: ProcessedProject[];
	}
	let { projects }: MyWorkSectionProps = $props();
	let indexOfMainProject = 0;
	let mainProject: ProcessedProject = projects[indexOfMainProject];
	let otherProjects = projects.filter((_project, index) => index !== indexOfMainProject);
</script>

<section class="mt-l">
	<SectionHeadline sectionName="my-work">My Work</SectionHeadline>
	<div class="default-margin projects-container mt-m">
		<article class="main-project mb-m">
			<a href={`/work/${mainProject.slug}`}>
				<img src={mainProject.projectImageUrl} alt={mainProject.name} />
			</a>
			<div class="project-info mt-s">
				<div class="title-and-company">
					<h3 class="semi-bold">{mainProject.name}</h3>
					<p class="company dark-grey">{mainProject.company}</p>
				</div>
				<a href={`/work/${mainProject.slug}`} class="button-to-article">&rarr;</a>
			</div>
		</article>
		<div class="more-projects-container">
			{#each otherProjects as project}
				<article class="project">
					<a href={`/work/${project.slug}`}>
						<img src={project.projectImageUrl} alt={project.name} />
					</a>
					<div class="project-info mt-s">
						<div class="title-and-company">
							<h3 class="semi-bold">{project.name}</h3>
							<p class="company dark-grey">{project.company}</p>
						</div>
						<a href={`/work/${project.slug}`} class="button-to-article">&rarr;</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
