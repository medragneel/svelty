<script lang="ts">
    import Grid from "$lib/components/grid.svelte";
    import "$lib/styles/global.css";
    export let data;
    console.log(data)
</script>

<div class="container p-3">
    <h1 class="align-center">Sarch For A Movie / TvShow</h1>
    <br />
    <br />

    <center>
        <form>
            <input
                type="text"
                name="query"
                placeholder="Search for Movie / Tvshow"
                bind:value={data.query}
            />
        </form></center
    >

    <br />
    <br />

    {#if data.query}
        <Grid movies={data.movies} next={null} />
    {/if}
</div>
