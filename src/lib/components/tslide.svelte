<script lang="ts">
    import { media } from "$lib/api";
    export let shows;
    export let title: string;
    export let href: string | null;
</script>

<br />
<br />

<div class="container">
    <h2>
        {title} - {#if href}
            <a {href}>See More</a>
        {/if}
    </h2>
    <br />

    <div class="carousel">
        {#each shows.results as show (show.id)}
            <a href={`/tv/${show.id}`}>
                <img src={media(show.poster_path, 200)} alt={show.name} />
            </a>
        {/each}
    </div>
</div>

<style>
    img {
        border-radius: 0.75em;
    }
</style>
