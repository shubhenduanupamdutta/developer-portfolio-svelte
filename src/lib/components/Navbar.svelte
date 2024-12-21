<script>
	import { goto } from '$app/navigation';

	import { Button } from '$components';

	function gotToContactForm() {
		goto('/#contact-form');
	}
</script>

<nav class="navbar default-margin">
	<a href="/" class="logo">SD</a>
	<div class="navbar-links">
		<a href="/#about-me" class="nav-link">About Me</a>
		<a href="/#my-work" class="nav-link">My Work</a>
		<Button className="nav-bar" onclick={gotToContactForm}>Contact</Button>
	</div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    .logo {
        font-size: 30px;
        font-weight: bold;
    }

    .navbar-links {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .nav-link:hover {
        text-decoration: underline;
    }
</style>