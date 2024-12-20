import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'b448w4y2',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-09-29'
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const processedProject: ProcessedProject[] = [];
}