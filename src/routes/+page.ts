import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperience: devExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);
    // console.log(workExperience);
    const rawProject: SanityProject[] = await sanityClient.fetch(
        "*[_type == 'project']"
    )

    const projects = rawProject.map(processProjectEntries);

    console.log(rawProject.length);
	return { workExperience };
};
