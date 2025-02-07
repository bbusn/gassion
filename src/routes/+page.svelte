<script lang="ts">
    import { onMount } from 'svelte';
	import { t } from '../lib/i18n';

    onMount(()=> {
        const cross = document.querySelector('#cross') as HTMLImageElement;

        cross.addEventListener('click', () => {
            cross.classList.toggle('rotate-[240deg]');
        });
    })
</script>

<svelte:head>
	<title>{$t('home.title')} - Quentin Gassion</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 w-full flex flex-col justify-start items-center gap-8">
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
            <img draggable="false" id="cross" src="/images/cross.svg" class="mr-8 select-none rotate-[240deg] transition-all duration-1000" alt="" />
        </div>
        <div class="mt-4 w-full flex flex-col items-end justify-center">
            <p class="w-[80%] md:w-[65%] font-secondary text-right">
                {$t('home.sections.1.paragraphs.2')}
            </p>
        </div>
    </section>
    <hr />
    <section class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex flex-col justify-start items-start w-full">
            <h2 class="pb-2">{$t('home.sections.2.title')}</h2>

            <div class="my-6 flex justify-between gap-5 items-start w-full">
                <div class="w-full flex justify-center gap-5 items-center flex-col h-full">
                    <div class="h-[500px] project-card"></div>
                    <div class="h-[600px] project-card"></div>
                </div>
                <div class="w-full flex justify-center gap-5 items-center flex-col h-full">
                    <div class="h-[600px] project-card"></div>
                    <div class="h-[400px] project-card"></div>
                </div>
                <div class="w-full flex justify-center gap-5 items-center flex-col h-full">
                    <div class="h-[500px] project-card"></div>
                    <div class="h-[600px] project-card"></div>
                </div>
            </div>
        </div>
    </section>
</div>	