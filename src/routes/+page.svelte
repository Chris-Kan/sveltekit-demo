<script>
    import {supabase} from '$lib/supabase';

    let promise = supabase.from("countries").select();
</script>

<h1>Aufgaben:</h1>
<ul><li>anstatt eines JS-Objekts,
    das auf der Seite dargestellt wird,
    möchte ich eine Liste aller Länder</li>
    <li>daisy ui loading icon</li>
</ul>

{#await promise}
<div>... loading
    <span class="loading loading-spinner loading-lg"></span>
</div>
{:then result}
<div>{JSON.stringify(result)}</div>
{/await}

<!-- <div>{JSON.stringify(promise)}</div> -->