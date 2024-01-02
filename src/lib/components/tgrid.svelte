<script lang="ts">
    import { media } from "$lib/api";
    import type { MovieListResult, ShowListResult } from "$lib/types/movies";

    export let movies: MovieListResult[] | ShowListResult[];
    export let next: string | null;
</script>

<div class="container">
    <div class="grid">
        {#each movies as movie (movie.id)}
            <a href={`/tv/${movie.id}`}>
                <img src={media(movie.poster_path, 200)} alt={movie.id.toString
                ()} />
            </a>
        {/each}
    </div>
    <br />

    {#if next}
        <a class="next btn btn-dark px-2" href={next}
            ><i class="fa-solid fa-arrow-right" /></a
        >
    {/if}
</div>

<style>
    .next {
        float: right;
    }
    img {
        border-radius: 0.75em;
    }
</style>

