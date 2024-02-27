<script>
    import {supabase} from '$lib/supabase';

    let promise = supabase.from("countries").select();

    let countries = [];
    promise.then((result) => {
        countries = result.data;
    });
</script>
<div class="prose">
<h1>Aufgaben:</h1>
</div>
<ul>
    {#each countries as country}
        <li>{country.name}</li>
    {/each}
</ul>

{#await promise}
<div>
    <span class="loading loading-spinner loading-lg"></span>
</div>
{:then result}
<div>{JSON.stringify(result)}</div>
{/await}

<!-- <div>{JSON.stringify(promise)}</div> -->