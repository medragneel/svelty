<script>
    import Tgrid from "$lib/components/tgrid.svelte";
    export let data;
</script>

<br />

<div class="container align-center">
    <h1>{data.view}</h1>
</div>
<br />
<br />

<Tgrid
    movies={data.movies}
    next={data.next_page ? `/shows/${data.view}?page=${data.next_page}` : null}
/>
