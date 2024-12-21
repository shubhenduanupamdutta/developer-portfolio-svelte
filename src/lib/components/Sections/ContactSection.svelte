<script lang="ts">
	import { Button, SectionHeadline } from '$components';

	function onSubmit(event: Event) {
		event.preventDefault();
		console.log(event);
	}
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		<form>
			<input class="text-input mb-m" placeholder="Your Name" />
			<input class="text-input mb-m" placeholder="Your Email" />
			<textarea placeholder="Tell me what's up."></textarea>
			<Button onclick={onSubmit}>Submit</Button>
		</form>
		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project.</h3>
			<p>
				I'm always looking for new opportunities to work on exciting projects. If you have a project
				in mind, let's talk about it. I am currently focusing on web development, specifically using
				FastAPI, Svelte and PostgreSQL, but I am open to other technologies as well.
			</p>
		</div>
	</div>
</section>
