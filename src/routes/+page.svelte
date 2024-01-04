<script lang="ts">
    import Hero from "$lib/components/hero.svelte";
    import Carousel from "$lib/components/carousel.svelte";
    import { views } from "$lib/views.js";
    import { slide } from "svelte/transition";
    export let data;
</script>

<div class="main" transition:slide>
    <Hero movie={data.featured} name={data.featured.title} media_type="movie" />
    <Carousel
        title={views.trending.title}
        movies={data.trending}
        href="/movies/trending"
    />
    <Carousel
        title={views.nowPlaying.title}
        movies={data.nowPlaying}
        href="/movies/nowPlaying"
    />
    <Carousel
        title={views.upcoming.title}
        movies={data.upcoming}
        href="/movies/upcoming"
    />
    <Carousel
        title={views.top_rated.title}
        movies={data.top_rated}
        href="/movies/top_rated"
    />
    <Carousel
        title={views.discover.title}
        movies={data.discover}
        href="/movies/discover"
    />
</div>
