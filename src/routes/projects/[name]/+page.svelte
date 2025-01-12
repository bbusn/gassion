<script lang="ts">
    import { page } from '$app/state';
	import { t } from '../../../lib/i18n';
    const { name } = page.params;

    const keyExists = (key: string): boolean => {
        return $t(key) != key;
    };

    let title = $state($t('projects_list.' + name + '.title') ?? $t('errors.404.title'));

    $effect(() => {
        if (keyExists('projects_list.' + name + '.title')) {
            title = $t('projects_list.' + name + '.title');
        } else {
            //Redirect to 404
        }
    });
   
</script>

<h1 class="uppercase text-4xl font-primary">{title}</h1>