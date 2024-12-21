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
					<h4 class="semi-bold">{mainProject.name}</h4>
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
							<h4 class="semi-bold">{project.name}</h4>
							<p class="company dark-grey">{project.company}</p>
						</div>
						<a href={`/work/${project.slug}`} class="button-to-article">&rarr;</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
    img {
        width: 100%;
        border-radius: 20px;
        object-fit: fill;
        cursor: pointer;
    }

    .more-projects-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .more-projects-container article {
        width: 45%;
    }

    .more-projects-container img {
        height: 200px;
    }

    .main-project img {
        max-height: 450px;
    }

    article {
        margin: 10px;
        padding: 10px;
        border: 2px solid #555;
        box-shadow: 0 0 10px #888;
        border-radius: 20px;
    }

    .project-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button-to-article {
        display: block;
        font-size: 32px;
        border: 1px solid black;
        border-radius: 32px;
        padding: 0 20px 5px;
    }

    .company {
        font-size: 12px;
        margin-bottom: 0;
    }
</style>