<script lang="ts">
	import { t } from '../../lib/i18n';
    import { gsap } from "gsap";
    import { onMount } from 'svelte';

    onMount(() => {
        const title = document.querySelector("h1") as HTMLHeadingElement;

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

        titleObserver.observe(title);

        document.querySelectorAll('.project-card').forEach((card) => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { filter:'grayscale(50%) brightness(1)', duration: 0.1 });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { filter:'grayscale(100%) brightness(0.8)', duration: 0.1 });
            });
        });
    });

</script>

<svelte:head>
	<title>{$t('projects.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-8 sm:px-12 lg:px-24 w-full flex flex-col justify-start items-start gap-16">
    <h1 id="#title">{$t('projects.title')}</h1>
    <hr />
    <div class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex flex-col justify-start items-start w-full">
            <div class="my-6 flex justify-between gap-5 items-start w-full flex-wrap lg:flex-nowrap">
                <div class="w-full flex justify-center 2xl:gap-12 gap-8 lg:gap-5 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/1-${$t('projects.1.slug')}`} class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/1/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/4-${$t('projects.4.slug')}`} class="h-[500px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/4/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/7-${$t('projects.7.slug')}`} class="h-[300px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/7/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/2-${$t('projects.2.slug')}`} class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/2/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/5-${$t('projects.5.slug')}`} class="h-[400px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/5/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/8-${$t('projects.8.slug')}`} class="h-[500px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/8/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/3-${$t('projects.3.slug')}`} class="h-[500px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/3/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/6-${$t('projects.6.slug')}`} class="h-[600px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/6/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/9-${$t('projects.9.slug')}`} class="h-[300px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/9/main.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>	