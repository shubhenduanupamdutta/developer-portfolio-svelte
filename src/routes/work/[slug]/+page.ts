import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const rawProject: SanityProject[] = await sanityClient.fetch(
		`*[_type == "project" && slug == $slug]`,
		{ slug }
	);

	if (rawProject.length !== 1) {
		throw error(404, 'Project not found');
	}

	const project = processProjectEntries(rawProject[0]);
	return { project };
};
