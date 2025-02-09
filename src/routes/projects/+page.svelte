<script lang="ts">
	import { t } from '../../lib/i18n';
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';
   
    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.project-card',
                start: 'top+=300 bottom',
                end: 'bottom center',
                scrub: true
            }
        });

        tl.to('.project-card', {
            stagger: 0.2,
            y: -100,
        });

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
    <section class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex flex-col justify-start items-start w-full">
            <div class="my-6 flex justify-between gap-5 items-start w-full flex-wrap lg:flex-nowrap">
                <div class="w-full flex justify-center 2xl:gap-12 gap-8 lg:gap-5 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href="/projects/1" class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/1.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[500px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/4.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[300px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/7.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href="/projects/2" class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/2.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[400px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/5.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[500px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/8.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href="/projects/2" class="h-[500px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/3.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[600px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/6.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href="/projects/2" class="h-[300px] load-group-3 project-card">
                        <img draggable="false" src="/images/projects/9.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>	