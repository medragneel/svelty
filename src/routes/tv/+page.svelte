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
        href="/tv/trending"
    />
    <Tslide title={Tviews.airing.title} shows={data.airing} href="/tv/airing" />
    <Tslide title={Tviews.top.title} shows={data.top} href="/tv/top" />
</div>
