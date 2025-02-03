<script lang="ts">
	import '../app.css';
	import { t } from '../lib/i18n';
	import { locales, locale } from 'svelte-i18n';
    import { onMount } from "svelte";
    import { gsap } from "gsap";
  	import Lenis from 'lenis';

	let { children } = $props();

	let langs = [
      { value: 'en', name: 'English' },
      { value: 'fr', name: 'Français' },
    ];

	onMount(() => {
		const lenis = new Lenis();

		const raf = (time: any) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

        gsap.fromTo("header", { opacity: 0, y: -50}, { opacity: 1, y: 0, duration: 1 });
	});
</script>

<main class="bg-white min-h-screen w-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-start">
	<header class="opacity-0 px-6 sm:px-10 lg:px-20  w-full py-4 sm:py-10 flex items-start justify-between h-28">
		<a class="link uppercase text-4xl flex items-center justify-center" href="/">
			<p>Quentin</p>
		</a>
		<div class="flex justify-start items-center flex-col gap-2">
			<nav class="flex items-center justify-start leading-5 text-lg flex-col">
				<a class="link" href="/about-me">{$t('nav.about_me')}</a>
				<a class="link" href="/projects">{$t('nav.projects')}</a>
				<a class="link" href="/services">{$t('nav.services')}</a>
				<a class="link" href="/contact">{$t('nav.contact')}</a>
			</nav>
			<select bind:value={$locale}>
				{#each $locales as l}
				  <option value={l}>{l}</option>
				{/each}
			</select>
		</div>
	</header>
	{@render children()}
</main>
