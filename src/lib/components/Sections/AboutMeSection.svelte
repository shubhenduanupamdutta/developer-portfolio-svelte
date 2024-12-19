<script lang="ts">
	import { goto } from '$app/navigation';
	import image from '$assets/about-me.jpg';
	import { Button, SectionHeadline } from '$components';

    function onclick() {
        goto("/#contact-form");
    }
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName={'about-me'}>About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="" />
		<div class="text">
			<p>
				Hey, I'm Shubhendu, the tech guy behind OneMithila, the premier agency connecting people of
				Mithila.
			</p>
			<p>
				With years of hands-on experience tackling real-world coding challenges, and meeting diverse
				client needs, I've build a quite deep understanding of the tech landscape. But beyond
				coding, my true passion lies in teaching and learning. I love to share my knowledge and
				experience with others, and I'm always eager to learn new things. I'm a firm believer in the
				power of community and collaboration, and I'm always looking for ways to give back to the
				community.
			</p>
			<p>
				Through OneMithila, I'm working to create a platform where people of Mithila can connect,
				share, and learn from each other. I'm excited to see where this journey takes us, and I'm
				looking forward to meeting you along the way. This is also a platform where one can look for
				local artist and other things which are unique to Mithila, and hard to find elsewhere.
			</p>
            <Button className="mt-m"{onclick}>Tell me about your project</Button>
		</div>
	</div>
</section>

<style>
    .content-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .image {
        width: 40%;
        border-radius: 20px;
        object-fit: cover;
    }

    .text {
        width: 55%;
        text-align: left;
    }
</style>