<script lang="ts">
    import { media } from "$lib/api";
    import type { MovieList } from "$lib/types/movies";

    export let movies: MovieList;
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
        {#each movies.results as movie (movie.id)}
            <a href={`/movie/${movie.id}`}>
                <img src={media(movie.poster_path, 200)} alt={movie.title} />
            </a>
        {/each}
    </div>
</div>

<style>
    img {
        border-radius: 0.75em;
    }
</style>
