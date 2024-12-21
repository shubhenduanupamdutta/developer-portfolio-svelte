import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperience: devExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);
	// console.log(workExperience);
	const rawProject: SanityProject[] = await sanityClient.fetch(
		"*[_type == 'project'] | order(dateAccomplished desc)"
	);

	// console.log('BEFORE PROCESSING');
	// console.log(rawProject[0]);

	const projects = rawProject.map(processProjectEntries);

	// console.log('AFTER PROCESSING');
	// console.log(projects[0]);

	console.log(rawProject.length);
	return { workExperience, projects };
};
