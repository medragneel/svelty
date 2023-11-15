<script>
    import "$lib/styles/global.css";
    import Grid from "$lib/components/grid.svelte";
    export let data;
</script>

<br />

<div class="container align-center">
    <h1>{data.view}</h1>
</div>
<br />
<br />

<Grid
    movies={data.movies.results}
    next={data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null}
/>
