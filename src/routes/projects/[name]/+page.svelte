<script lang="ts">
    import { page } from '$app/state';
    import { t } from '../../../lib/i18n';
    import { afterNavigate } from '$app/navigation'; 
    
    const { name } = page.params;

    const keyExists = (key: string): boolean => {
        return $t(key) !== key;
    };


    afterNavigate(() => {
        titleKeyExist = keyExists('projects_list.' + page.params.name + '.title');
    });

    let titleKeyExist = $state(keyExists('projects_list.' + page.params.name + '.title'));
</script>

<div class="px-8 sm:px-12 lg:px-24 w-full flex flex-col justify-start items-start gap-6">
    <h1>
        {titleKeyExist ? 
            $t('projects_list.' + page.params.name + '.title') : 
            $t('errors.404.title')}
    </h1>
    <hr />
    {#if titleKeyExist}
        <p>{$t('projects_list.' + page.params.name + '.description')}</p>
    {:else}
        <p>{$t('errors.404.message')}</p>
    {/if}
</div>