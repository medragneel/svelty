<script lang="ts">
    // your script goes here
    import "$lib/styles/global.css";
    import Hero from "$lib/components/hero.svelte";
    import Tslide from "$lib/components/tslide.svelte";
    import { Tviews } from "$lib/views.js";
    import { slide } from "svelte/transition";
    export let data;
</script>

<div class="main" transition:slide>
    <Hero movie={data.featured} name={data.featured.name} media_type="tv" />
    <Tslide
        title={Tviews.trending.title}
        shows={data.trending}
        href="/shows/trending"
    />
    <Tslide
        title={Tviews.airing_today.title}
        shows={data.airing_today}
        href="/shows/airing_today"
    />
    <Tslide
        title={Tviews.top_rated.title}
        shows={data.top_rated}
        href="/shows/top_rated"
    />
    <Tslide
        title={Tviews.discover.title}
        shows={data.discover}
        href="/shows/discover"
    />
</div>
