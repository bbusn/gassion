<script lang="ts">
    import '../app.css';
    import { t } from '../lib/i18n';
    import { locales, locale } from 'svelte-i18n';
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import Lenis from 'lenis';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

    let { children } = $props();
	
	function getFlag(locale: string) {
		const region = (locale ?? '').split('-').pop()?.toUpperCase() ?? '';
		
		return region
		.split('')
		.map((char: string) => String.fromCodePoint(char.charCodeAt(0) + 127397))
		.join('');
	}

    onMount(async () => {
		
		const lenis = new Lenis({
			duration: 3,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});

		const raf = (time: any) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		beforeNavigate(() => {
			lenis.stop();
		});

		afterNavigate(() => {
			lenis.start();
		});

		const footer = document.querySelector("footer") as HTMLElement;
		const header = document.querySelector("header") as HTMLElement;
		const footerTitles = document.querySelectorAll(".footer-title") as NodeListOf<HTMLElement>;
		const footerSections = document.querySelectorAll(".footer-section") as NodeListOf<HTMLElement>;
		const footerSectionTrigger = document.querySelector(".footer-section-trigger") as HTMLElement;
		
		const headerObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
			if (entry.isIntersecting) {
				gsap.fromTo(header, 
					{ opacity: 0, y: -50 }, 
					{ opacity: 1, y: 0, duration: 1 }
					);
				}
			});
		}, { threshold: 0.1 });

		headerObserver.observe(header);

		const footerObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
			if (entry.isIntersecting) {
				gsap.fromTo(header, 
				{ opacity: 0, y: -50 }, 
				{ opacity: 1, y: 0, duration: 1 }
				);
			
				footerTitles.forEach((title, index) => {
					gsap.fromTo(title, 
					{ opacity: 0, scale: 0.5 }, 
					{ opacity: 1, scale: 1, duration: 1, delay: index * 0.2 }
					);
				});
			}
			});
		}, { threshold: 0.1 });

		footerObserver.observe(footer);

		const footerSectionsObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
			if (entry.isIntersecting) {
				footerSections.forEach((section, index) => {
					gsap.fromTo(section, 
					{ opacity: 0, y: 50 }, 
					{ opacity: 1, y: 0, duration: 1, delay: index * 0.4 }
					);
				});
			}
			});
		}, { threshold: 0.1 });

		footerSectionsObserver.observe(footerSectionTrigger);
        
        const crossElements = document.querySelectorAll('.cross') as NodeListOf<HTMLImageElement>;
        crossElements.forEach((cross) => {
            cross.addEventListener('mouseenter', () => {
                cross.classList.toggle('rotate-[240deg]');
            });
        });
    });
</script>

<main class="pt-2 pb-24 bg-white min-h-screen max-w-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-start gap-4">
	<header class="opacity-0 px-6 lg:px-8 w-full py-2 lg:py-4 flex items-start justify-between h-28">
		<a class="link text-6xl flex items-center justify-center" href="/">
			<p>{$t('header.title')}</p>
		</a>
		<div class="flex justify-start items-center flex-col gap-2">
			<nav class="flex items-center justify-start leading-5 text-lg flex-col">
				<a class="link" href="/about-me">{$t('header.navigation.1')}</a>
				<a class="link" href="/projects">{$t('header.navigation.2')}</a>
				<a class="link" href="/contact">{$t('header.navigation.3')}</a>
			</nav>

			<select bind:value={$locale}>
				{#each $locales as l}
				  <option value={l} data-locale={l}>
					{getFlag(l)}
				  </option>
				{/each}
			  </select>
		</div>
	</header>

	{@render children()}

	<footer class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full my-8 sm:my-6 flex flex-col justify-start items-center py-6 lg:py-8 gap-10 2xl:gap-12">
		<hr />
		<div class="w-full flex justify-center sm:justify-between 2xl:justify-between items-center flex-wrap gap-5 sm:gap-0">
			<p class="opacity-0 scale-50 footer-title leading-none text-8.5xl 2xs:text-10xl xs:text-12xl sm:text-8xl sm-md:text-8.5xl md:text-9xl md-lg:text-10xl lg:text-12xl xl:text-13xl 2xl:text-15xl font-primary">
				{$t('footer.title.1')}
			</p>
			<div class="flex justify-center items-center w-28 xs:w-48 sm:w-9 md:w-11 md-lg:w-12 lg:w-14 xl:w-16">
				<img draggable="false" src="/images/cross.svg" class="cross w-9 2xs:w-10 xs:w-12 sm:w-9 md:w-11 md-lg:w-12 lg:w-14 xl:w-16 object-contain select-none transition-all duration-700" alt="" />
			</div>
			<p class="opacity-0 scale-50 footer-title text-8xl 2xs:text-8.5xl xs:text-10xl sm:text-8xl sm-md:text-8.5xl md:text-9xl md-lg:text-10xl lg:text-12xl xl:text-13xl 2xl:text-15xl font-primary">
				{$t('footer.title.2')}
			</p>
		</div>
		<hr class="footer-section-trigger" />
		<div class="footer-section w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
			<p class="footer-name">
				{$t('footer.sections.1.title')}
			</p>
			<img draggable="false" src="/images/arrow_sm.svg" class="rotate-90 sm:rotate-0 w-6 object-contain select-none transition-all duration-300" alt="" />
			<div class="sm:w-80 flex flex-col justify-center items-center sm:items-end">
				<p>{$t('footer.sections.1.paragraphs.1')}</p>
				<p>{$t('footer.sections.1.paragraphs.2')}</p>
				<p>{$t('footer.sections.1.paragraphs.3')}</p>
				<p>{$t('footer.sections.1.paragraphs.4')}</p>
				<p>{$t('footer.sections.1.paragraphs.5')}</p>
			</div>
		</div>
		<hr />
		<div class="footer-section w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
			<p class="footer-name">
				{$t('footer.sections.2.title')}
			</p>
			<img draggable="false" src="/images/arrow_sm.svg" class="rotate-90 sm:rotate-0 w-6 object-contain select-none transition-all duration-300" alt="" />
			<div class="sm:w-80 flex flex-col justify-center items-center sm:items-end">
				<a class="footer-link longer" href={`mailto:${$t('footer.sections.2.paragraphs.1').toLowerCase()}`}>{$t('footer.sections.2.paragraphs.1')}</a>
			</div>
		</div>
		<hr />
		<div class="footer-section w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
			<p class="footer-name">
				{$t('footer.sections.3.title')}
			</p>
			<img draggable="false" src="/images/arrow_sm.svg" class="rotate-90 sm:rotate-0 w-6 object-contain select-none transition-all duration-300" alt="" />
			<div class="sm:w-80 flex flex-col justify-center items-center sm:items-end">
				<a class="footer-link" target="_blank" href={`${$t('footer.sections.3.paragraphs.2')}`}>{$t('footer.sections.3.paragraphs.1')}</a>
				<a class="footer-link" target="_blank" href={`${$t('footer.sections.3.paragraphs.4')}`}>{$t('footer.sections.3.paragraphs.3')}</a>
			</div>
		</div>
	</footer>
</main>
