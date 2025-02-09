<script lang="ts">
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { t, locale } from '../../../lib/i18n';
    import { gsap } from "gsap";
    import { onMount } from 'svelte';

    const id = page.params.name.split('-')[0];
    interface ProjectData {
        main_image: {
            src: string;
            alt: string;
            width: number;
            height: number;
        },
        main_video: {
            src: string;
            alt: string;
            width: number;
            height: number;
        },
        images: { [key: string]: { 
            src: string; 
            alt: string; 
            width: number;
            height: number;
            description: string 
        } };
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }
    
    let data: ProjectData | null = null;

    onMount(async () => {
        try {
            const module = await import(`../../../lib/locales/${$locale}.json`);
            data = module.default.projects[id];

            if (data === undefined) {
                goto('/404');
            } else {
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
                     
            }
        } catch (error) {
            goto('/404');
        }
    });
</script>

<svelte:head>
	<title>{$t(`projects.${id}.meta.title`)} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-start gap-2">
    <h1 class="w-full text-left">{$t(`projects.${id}.title`)}</h1>
{#key locale}
    {#if data}
        <hr />
        <div class="my-6 w-full flex items-start justify-center sm:justify-between gap-6 flex-wrap sm:flex-nowrap">
            {#if data.main_image}
                <img draggable="false" src={data.main_image.src}  height={data.main_image.height} width={data.main_image.width}  class="project-image object-cover select-none transition-all duration-500" alt={data.main_image.alt} />
            {/if}
            {#if data.main_video}
                <!-- svelte-ignore a11y_media_has_caption -->
                <video controls class="w-full h-full object-contain select-none transition-all duration-500">
                    <source src={data.main_video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            {/if}

            {#if data.subtitle || data.description}  
            <div class="w-full sm:w-1/2 flex flex-col items-center sm:items-end justify-center gap-4">
                {#if data.subtitle}
                    <h2>{$t(`projects.${id}.subtitle`)}</h2>
                {/if}   
                {#if data.description}
                    <p class="w-full text-center sm:text-right">{$t(`projects.${id}.description`)}</p>
                {/if}         
            </div>  
            {/if}
        </div>
        <div class="w-full flex justify-center sm:justify-between items-start gap-4 flex-wrap">
            {#if data.images}  
                {#each Object.keys(data.images) as key}
                    <div class="flex flex-col justify-start items-center gap-3">
                        <img class="project-image rounded-sm object-cover" src={data.images[key].src} alt={data.images[key].alt} height={data.images[key].height} width={data.images[key].width} />
                        {#if data.images[key].description}
                            <p class="text-center italic">{data.images[key].description}</p>
                        {/if}
                    </div>
                {/each}
            {/if} 
        </div>
        {#if data.link} 
        <div class="mt-6 w-full flex justify-center items-center gap-4">
            <a href={$t(`projects.${id}.link.url`)} target="_blank" rel="noopener noreferrer" class="link text-6xl longer">
                {$t(`projects.${id}.link.text`)}
            </a>
        </div>
        {/if}
    {:else}
        <hr />
        <div class="my-6 w-full flex flex-col items-start justify-center gap-6">
            <div class="h-[40vh] sm:h-[35vh] flex justify-center items-center bg-squeleton-300 animate-pulse w-full rounded-sm transition-all duration-300">
                <div class="w-16 h-16 border-2 border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
            </div>
            <p class="max-w-[100%] text-center text-xl sm:text-2xl font-secondary">{$t('projects.loading')}</p>
        </div>
    {/if}
{/key}
</div>