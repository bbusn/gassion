<script lang="ts">
	import '../app.css';
	import { t } from '../lib/i18n';
    import { onMount } from "svelte";
    import { gsap } from "gsap";

	let { children } = $props();

	onMount(() => {
        gsap.fromTo("header", { opacity: 0, y: -50}, { opacity: 1, y: 0, duration: 1 });
	});
</script>

<main class="bg-white h-screen w-screen flex flex-col items-center justify-start">
	<header class="opacity-0 px-6 sm:px-10 lg:px-20  w-full py-4 sm:py-10 flex items-start justify-between h-28">
		<a class="link uppercase text-4xl flex items-center justify-center" href="/">
			<p>Quentin</p>
		</a>
		<nav class="flex items-center justify-start leading-5 text-lg flex-col">
			<a class="link" href="/about-me">{$t('nav.about_me')}</a>
			<a class="link" href="/projects">{$t('nav.projects')}</a>
			<a class="link" href="/services">{$t('nav.services')}</a>
			<a class="link" href="/contact">{$t('nav.contact')}</a>
			<a class="link" href="/projects/prout">prout</a>
			<a class="link" href="/projects/prout/patrofor">prout patrofor</a>
			<a class="link" href="/projects/proutpatrofor2">prout patrofor2</a>
		</nav>
	</header>
	{@render children()}
</main>
