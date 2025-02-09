<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from "gsap";
	import { t } from '../../lib/i18n';
    
    
    onMount(() => {
        const title = document.querySelector("h1") as HTMLHeadingElement;

        const sections = document.querySelectorAll("section");

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(title, 
                    { opacity: 0, y: -50 }, 
                    { opacity: 1, y: 0, duration: 1, delay: 0.4 }
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
    })
</script>

<svelte:head>
	<title>{$t('about_me.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-center gap-8">
    <h1 class="w-full text-left">{$t('about_me.title')}</h1>
    <hr />
    <section class="w-full flex items-center justify-center sm:justify-between gap-6 flex-wrap sm:flex-nowrap">
        <div class="h-[65vh] sm:h-[60vh] mt-4 flex justify-center rounded-sm">
            <img draggable="false" src="/images/about_me.png" class="grayscale hover:grayscale-0 w-full h-full object-contain select-none transition-all duration-500" alt="" />
        </div>
        <div class="w-full sm:w-1/2 flex flex-col items-center sm:items-end justify-center gap-4">
            <h2 class="text-center sm:text-right">{$t('about_me.sections.1.title')}</h2>
            <p class="w-full text-center sm:text-right">{$t('about_me.sections.1.paragraphs.1')}</p>
        </div>  
    </section>
</div>	