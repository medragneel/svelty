<script lang="ts">
    import { media } from "$lib/api";
    import type { ShowList } from "$lib/types/movies";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

    export let shows: ShowList;
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
        {#each shows.results as show (show.id)}
            <SplideSlide>
                <a href={`/tv/${show.id}`}>
                    <img src={media(show.poster_path, 200)} alt={show.name} />
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
