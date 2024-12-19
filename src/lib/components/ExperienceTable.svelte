<script lang="ts">
	interface WorkExperience {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate?: string;
	}

	const workExperience: WorkExperience[] = [
		{
			jobTitle: 'Research Assistant',
			company: 'IISc Bangalore',
			startDate: '2018-08-01',
			endDate: '2023-10-31'
		},
		{
			jobTitle: 'Software Developer',
			company: 'Flexli Technologies Pvt. Ltd.',
			startDate: '2023-11-03',
			endDate: '2024-04-31'
		},
		{
			jobTitle: 'Full Stack Developer',
			company: 'Deloitte Touche Tohmatsu India LLP',
			startDate: '2024-05-01'
		}
	];
</script>

<section class="default-margin work-experience mt-l">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate}
							{#if job.endDate}
								/ {job.endDate}
                            {:else}
								/ present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past Work <br /> Experience</h2>
</section>

<style>
    .work-experience {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .work-experience-list {
       width: 50%;
    }

    .headline {
        text-align: right;
    }

    .work-item {
        border-bottom: 2px solid #f0eded;
        padding-bottom: 12px;
    }

    .work-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .work-item p {
        margin-bottom: 0;
    }

    .company-and-date {
        display: flex;
        justify-content: space-between;
    }
</style>