<script lang="ts">
    import { media } from "$lib/api";
    import type { MovieList } from "$lib/types/movies";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

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

    <Splide
        options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            autoWidth: true,
            gap: "1rem",
            rewind: true,
        }}
        aria-label="My Favorite Images"
    >
        {#each movies.results as movie (movie.id)}
            <SplideSlide>
                <a href={`/movie/${movie.id}`}>
                    <img
                        src={media(movie.poster_path, 200)}
                        alt={movie.title}
                    />
                </a>
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style>
    img {
        border-radius: 0.75em;
    }
</style>
