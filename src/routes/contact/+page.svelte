<script lang="ts">
	import { t } from '../../lib/i18n';
</script>

<svelte:head>
	<title>{$t('contact.meta.title')} - {$t('meta.title')}</title>
</svelte:head>

<div class="px-6 sm:px-8 lg:px-14 xl:max-w-[1500px] w-full flex flex-col justify-start items-center gap-8">
    <h1 class="w-full text-left">{$t('contact.title')}</h1>
    <hr />
    <section class="w-full flex flex-col items-center justify-center gap-4">
        <div class="flex flex-col items-center justify-center gap-0.5">
            <p class="text-xl text-center w-full leading-none">{$t('contact.sections.1.paragraphs.1')}</p>
            <p class="text-xl text-center w-full leading-none">{$t('contact.sections.1.paragraphs.2')}</p>
        </div>
        <div class="h-[45vh] sm:h-[40vh] w-full mt-4 flex justify-center rounded-sm">
            <img draggable="false" src="/images/contact.png" class="w-full h-full object-cover select-none transition-all duration-500" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center">
            <h2 class="text-right">{$t('contact.sections.2.title')}</h2>
            <a class="footer-link longer" href={`mailto:${$t('contact.paragraphs.2.1').toLowerCase()}`}>{$t('contact.paragraphs.2.1')}</a>
        </div>
        <div class="flex flex-col items-center justify-center">
            <h2 class="text-right">{$t('contact.sections.3.title')}</h2>
            <a class="footer-link" target="_blank" href={`${$t('contact.paragraphs.4.2')}`}>{$t('footer.paragraphs.3.1')}</a>
            <a class="footer-link" target="_blank" href={`${$t('contact.paragraphs.4.4')}`}>{$t('footer.paragraphs.3.3')}</a>
        </div>
    </section>
</div>	