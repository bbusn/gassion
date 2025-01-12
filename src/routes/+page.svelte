<script lang="ts">
	import { t } from '../lib/i18n';
</script>

<svelte:head>
	<title>{$t('home.title')} - Quentin Gassion</title>
</svelte:head>

<div class="px-8 sm:px-12 lg:px-24 w-full flex flex-col justify-start items-start gap-6">
    <h1 class="uppercase text-6xl font-primary">{$t('home.title')}</h1>
    <hr class="bg-black h-[1px] w-full" />
</div>	