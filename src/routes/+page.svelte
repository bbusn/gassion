<script lang="ts">
	import { t } from '../lib/i18n';
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';
    import { onMount } from "svelte";

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

        gsap.registerPlugin(ScrollTrigger);
        
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
	<title>{$t('home.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-center gap-8">
    <h1 class="w-full text-left">{$t('home.title')}</h1>
    <hr />
    <section class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex justify-between w-full">
            <div class="flex flex-col gap-6 w-full">
                <h2>{$t('home.sections.1.title')}</h2>
                <p class="w-[85%] md:w-[70%]  font-secondary text-left">
                    {$t('home.sections.1.paragraphs.1')}
                </p>
            </div>
            <img draggable="false" src="/images/cross.svg" class="cross mr-8 select-none transition-all duration-1000" alt="" />
        </div>
        <div class="mt-4 w-full flex flex-col items-end justify-center">
            <p class="w-[80%] md:w-[65%] font-secondary text-right">
                {$t('home.sections.1.paragraphs.2')}
            </p>
        </div>
    </section>
    <hr />
    <div class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex flex-col justify-start items-start w-full">
            <h2 class="pb-2">{$t('home.sections.2.title')}</h2>

            <div class="my-6 flex justify-between gap-5 items-start w-full flex-wrap lg:flex-nowrap">
                <div class="w-full flex justify-center 2xl:gap-12 gap-8 lg:gap-5 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/1-${$t('projects.1.slug')}`} class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/1.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/4-${$t('projects.4.slug')}`} class="h-[400px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/4.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/2-${$t('projects.2.slug')}`} class="h-[400px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/2.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/5-${$t('projects.5.slug')}`} class="h-[450px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/5.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
                <div class="w-full flex justify-center gap-8 lg:gap-5 2xl:gap-12 items-center flex-col h-full flex-wrap">
                    <a aria-label='project' href={`/projects/3-${$t('projects.3.slug')}`} class="h-[600px] load-group-1 project-card">
                        <img draggable="false" src="/images/projects/3.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                    <a aria-label='project' href={`/projects/6-${$t('projects.6.slug')}`} class="h-[400px] load-group-2 project-card">
                        <img draggable="false" src="/images/projects/6.png" class="select-none transition-all duration-600 w-full h-full object-cover" alt="" />
                    </a>
                </div>
            </div>
    
            <div class="mt-4 flex justify-end items-center w-full gap-5">
                <img draggable="false" src="/images/arrow.svg" class="w-20" alt="" />
                <a href="/projects" class="link text-4xl">{$t('home.sections.2.see_more')}</a>
            </div>  
        </div>
    </div>
</div>	