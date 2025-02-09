<script lang="ts">
	import { t } from '../lib/i18n';
	import { page } from '$app/state';
    import { gsap } from "gsap";
    import { onMount } from 'svelte';

    onMount(() => {
        const title = document.querySelector("h1") as HTMLHeadingElement;

        const sections = document.querySelectorAll("section");

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(title, 
                    { opacity: 0, y: -50 }, 
                    { opacity: 1, y: 0, duration: 1, delay: 0.2 }
                    );
                }
                titleObserver.unobserve(entry.target);
            });
        }, { threshold: 0.1 });

        sections.forEach((section, index) => {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(section, 
                        { opacity: 0, y: -50 }, 
                        { opacity: 1, y: 0, duration: 1, delay: 0.8 + 0.2 * index }
                        );
                    }
                    sectionObserver.unobserve(entry.target);
                });
            }, { threshold: 0.1 });

            sectionObserver.observe(section);
        });
        
        titleObserver.observe(title);
    });
</script>

<svelte:head>
	<title>{$t('errors.' + page.status + '.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-start gap-6">
    <h1>{$t('errors.' + page.status + '.title')}</h1>
    <hr />
    <section class="w-full flex flex-col items-start justify-center gap-6">
        <div class="h-[45vh] sm:h-[40vh] flex justify-center items-center w-full rounded-sm transition-all duration-300">
            <img draggable="false" src="/images/error.png" class="w-full h-full object-cover select-none transition-all duration-400" alt="" />
        </div>
        <p class="max-w-[100%] text-center text-xl sm:text-2xl font-secondary">{$t('errors.' + page.status + '.message')}</p>
    </section>
</div>