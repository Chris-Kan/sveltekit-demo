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
<style>
    .country-list {
        list-style: none;
        padding: 0;
    }

    .country-list li {
        margin-bottom: 0.5rem;
    }
</style>

<ul class="country-list">
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