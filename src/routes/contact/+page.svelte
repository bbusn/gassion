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
	<title>{$t('contact.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-center gap-8">
    <h1 class="w-full text-left">{$t('contact.title')}</h1>
    <hr />
    <section class="my-6 w-full flex flex-col items-center justify-center gap-4">
        <div class="flex flex-col items-center justify-center gap-0.5">
            <p class="text-xl text-center w-full leading-none">{$t('contact.sections.1.paragraphs.1')}</p>
            <p class="text-xl text-center w-full leading-none">{$t('contact.sections.1.paragraphs.2')}</p>
        </div>
        <div class="h-[45vh] sm:h-[40vh] w-full mt-4 mb-8 flex justify-center rounded-sm">
            <img draggable="false" src="/images/contact.png" class="w-full h-full object-cover select-none transition-all duration-500" alt="" />
        </div>
        <div class="flex flex-wrap w-full items-center justify-center sm:flex-nowrap gap-10 sm:gap-4 sm:justify-around">
            <div class="flex flex-col items-center justify-center gap-1">
                <h2 class="text-right mb-2">{$t('contact.sections.2.title')}</h2>
                <a class="footer-link longer" href={`mailto:${$t('contact.sections.2.paragraphs.1').toLowerCase()}`}>{$t('contact.sections.2.paragraphs.1')}</a>
            </div>
            <div class="flex flex-col items-center justify-center gap-1">
                <h2 class="text-right mb-2">{$t('contact.sections.3.title')}</h2>
                <a class="footer-link longer" target="_blank" href={`${$t('contact.sections.3.paragraphs.2')}`}>{$t('contact.sections.3.paragraphs.1')}</a>
                <a class="footer-link" target="_blank" href={`${$t('contact.sections.3.paragraphs.4')}`}>{$t('contact.sections.3.paragraphs.3')}</a>
            </div>
        </div>
    </section>
</div>	