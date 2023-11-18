<script lang="ts">
    import { media } from "$lib/api";
    import type { MovieDetails, Trailer } from "$lib/types/movies";
    import { fade } from "svelte/transition";

    export let movie: MovieDetails;
    export let trailer: Trailer | undefined;
    export let name: string;
    let Watching = false;
    const toggleWatching = () => (Watching = !Watching);

    $: images = movie.images;
    $: backdrops = images.backdrops.find((img) => !img.iso_639_1);
</script>

<div class="top">
    <div class="columns">
        {#if !Watching}
            <div class="column is-full featured_wrapper p-0" transition:fade>

            {#if backdrops?.file_path !== undefined}
                <img
                    src={media(backdrops?.file_path, 1280)}
                    alt={movie.id.toString()}
                    class="featured"
                />
            {:else}
                <img
                    src="https://www.solidbackgrounds.com/images/1280x720/1280x720-black-solid-color-background.jpg"
                    alt={movie.id.toString()}
                    class="featured"
                />
            {/if}
                <div class="title_wrapper">
                    <span class="txt-light">Trending Today</span>
                    <h1 class="title txt-light fs-xxl">
                        {name}
                    </h1>
                    <br />
                    <br />

                    <button
                        on:click={toggleWatching}
                        class="button is-medium bg-light"
                    >
                        <i class="fa-solid fa-play pr-1" />
                        Watch Trailer
                    </button>
                </div>
            </div>
        {:else}
            <div
                class="column grid"
                class:has-trailer={!!trailer}
                transition:fade
            >
                {#if trailer}
                    <iframe
                        src="https://www.youtube.com/embed/{trailer?.key}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    />
                {/if}
            </div>
        {/if}
    </div>
</div>
<br />

<style>
    iframe {
        width: 100%;
        height: 80vh;
    }

    img {
        -webkit-box-reflect: below 5px
            linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
    .featured_wrapper {
        position: relative;
    }
    .featured_wrapper img {
        width: 100%;
        height: 100vh;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: top;
        object-position: top;
    }
    .title_wrapper {
        position: absolute;
        width: 100%;
        left: 2rem;
        bottom: 2rem;
        padding: 20px 40px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .title_wrapper h1 {
        width: 70%;
    }
    .button {
        font-size: 18px;
        padding: 1rem 3rem;
        outline: none;
        border: 0 !important;
    }
    @media (max-width: 768px) {
        .title_wrapper {
            text-align: center;
            left: 0;
        }
        .title_wrapper h1 {
            font-size: 32px !important;
            width: 100%;
        }
    }
</style>
