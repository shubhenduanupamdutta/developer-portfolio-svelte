# Svelte Project - Developer Portfolio

**Project 2 in [Master Svelte 5 & SvelteKit - Build & Deploy Real-World Apps](https://www.udemy.com/course/practical-sveltekit-guide-build-and-deploy-real-world-apps/)**

---

## Headless CMS

---

**A headless CMS is a content management system that separates the presentation layer (where content is presented) from the backend (where content is managed). A headless CMS allows you to manage content in one place and be able to deploy that content on any digital channel you choose. Separating the frontend from the backend unlocks your content, making it easier for marketers to manage content independently, and for developers to build faster, automate changes, and manage digital at scale. In a traditional CMS, content is tangled up with code and locked in silos, making reusing content — and creating modern digital experiences — next to impossible.**

### Ideal Use Cases for Headless CMS

The data which is updated frequently and needs to be displayed on multiple platforms like web, mobile, and IoT devices, should be managed by a headless CMS. The headless CMS can be used in the following scenarios:

- **E-commerce websites**: Product information, pricing, and availability.
- **News websites**: Articles, images, and videos.
- **Blogs**: Articles, images, and videos.

We can actually make use of the headless CMS for anything, but the above-mentioned scenarios are the most common ones.

### Installing Sanity

- Installing Sanity is very easy. You can install Sanity by following the steps mentioned when you create a new project on [Sanity](https://www.sanity.io/)

- Now you have to define schemas for that by opening the created sanity project locally in VS Code and adding a schema file in the `schemaType` folder.

```ts
// devExperience.ts
import { defineField, defineType } from 'sanity';

export const devExperience = defineType({
	name: 'devExperience',
	title: 'Development Experience',
	type: 'document',
	fields: [
		defineField({
			name: 'jobTitle',
			title: 'Job Title',
			type: 'string',
			validation: (rule) => rule.required()
		}),

		defineField({
			name: 'company',
			title: 'Company',
			type: 'string',
			validation: (rule) => rule.required()
		}),

		defineField({
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
			validation: (rule) => rule.required(),
			options: {
				dateFormat: 'YYYY-MM'
			}
		}),

		defineField({
			name: 'endDate',
			title: 'End Date',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM'
			}
		})
	]
});
```

- Then you have to import this schema in the `index.ts` file.

```ts
import { devExperience } from './devExperience';

export const schemaTypes = [devExperience];
```

- Then you can add documents in the local Sanity Studio.

# Getting Schema from Schema Defined in Sanity

- First you have to install `Sanity CLI`

```sh
npm install -g sanity@latest
```

- Then you have to run the sanity studio (go in that folder) and run

```sh
sanity extract schema
```

- This will create a file `schema.json` in the root of the project.
- Then you can use the following command to generate a typescript file from the schema.json file.

```sh
npx sanity typegen generate
```

- Now you can copy the file content, and paste it in a file in the `src/lib/types` folder. The file name can be `sanity.d.ts`.

### Fetching Data from Sanity
**NOTE: First make sure that CORS policy on the Sanity allows your web server localhost to fetch data from it.**
You can fetch data from Sanity by using the following code:

```ts
export const load: PageLoad = async () => {
	const workExperience: DevExperience[] = await sanityClient.fetch('*[_type == "devExperience"]');

	return { workExperience };
};
```

`'*[_type == "devExperience"]'` is a query which fetches all the documents of type `devExperience`.

### Displaying Data in Svelte
- Then you can use this in `+page.svelte` file.

```svelte
<script lang="ts">
    const { data } = $props();
    $inspect(data);
</script>
```
- `data` is the name of the prop which is passed to the `+page.svelte` file, from `+page.ts` file.