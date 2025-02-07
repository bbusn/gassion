<script lang="ts">
	import { t } from '../lib/i18n';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{$t('errors.' + page.status + '.title')} - Quentin Gassion</title>
</svelte:head>

<div class="px-8 sm:px-12 lg:px-24 w-full flex flex-col justify-start items-start gap-6">
    <h1>{$t('errors.' + page.status + '.title')}</h1>
    <hr />
    <p>{$t('errors.' + page.status + '.message')}</p>
</div>