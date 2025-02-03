<script lang="ts">
    import { onMount } from 'svelte';
	import { t } from '../lib/i18n';

    onMount(()=> {
        const cross = document.querySelector('#cross') as HTMLImageElement;

        cross.addEventListener('mouseover', () => {
            cross.classList.remove('rotate-[60deg]');
            cross.classList.add('rotate-[220deg]')
            cross.addEventListener('transitionend', () => {
                cross.classList.remove('rotate-[220deg]');
                cross.classList.add('rotate-[60deg]')
            }, { once: true });
        });
    })
</script>

<svelte:head>
	<title>{$t('home.title')} - Quentin Gassion</title>
</svelte:head>

<div class="px-8 sm:px-12 lg:px-24 w-full flex flex-col justify-start items-start gap-8">
    <h1 class="uppercase text-6xl font-primary">{$t('home.title')}</h1>
    <hr class="bg-black h-[1.5px] w-full" />
    <section class="w-full flex flex-col items-center justify-center gap-6">
        <div class="mt-4 flex justify-between w-full">
            <div class="flex flex-col gap-6 w-full">
                <h2 class="uppercase text-4xl font-primary">{$t('about_me.title')}</h2>
                <p class="w-[85%] md:w-[70%]  font-secondary text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet necessitatibus et dicta ipsum obcaecati quae architecto, aperiam doloribus laboriosam hic provident odit eaque, dolorem earum corrupti voluptate ad ab!  Libero illum corrupti totam asperiores eaque. Ratione, delectus aperiam?
                    Hic dignissimos earum voluptates totam quis autem. Aut, repellat sequi. Quod, rem dolorem.
                </p>
            </div>
            <img id="cross" src="/images/cross.svg" class="mr-8 select-none cursor-crosshair rotate-[60deg] transition-all duration-1000" alt="" />
        </div>
        <div class="mt-4 w-full flex flex-col items-end justify-center">
            <p class="w-[80%] md:w-[65%] font-secondary text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet necessitatibus et dicta ipsum obcaecati quae architecto, aperiam doloribus laboriosam hic provident odit eaque, dolorem earum corrupti voluptate ad ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ut aspernatur quidem totam, sunt eum?
            </p>
        </div>
    </section>
    <hr class="bg-black h-[1.5px] w-full" />
</div>	