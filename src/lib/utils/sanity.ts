import { createClient, type ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: 'b448w4y2',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-09-29'
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const builder = ImageUrlBuilder(sanityClient);
	const projectImageUrl = builder.image(rawProject.image).url();

	const processedProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		projectImageUrl: projectImageUrl,
		slug: rawProject.slug
		// content: Array<ProcessedTextContent | ProcessedImageContent>,
	};

	return processedProject;
}
