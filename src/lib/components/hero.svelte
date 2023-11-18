<script lang="ts">
    import { media } from "$lib/api";
    import type { MovieDetails } from "$lib/types/movies";

    // your script goes here
    export let movie: MovieDetails;
    export let name: string;
    export let media_type: string;
    $: images = movie.images;
    $: backdrops = images.backdrops.find((img) => !img.iso_639_1);
</script>

<!-- #CodePenChallenge: Reflections -->
<div class="top">
    <div class="columns">
        <div class="column is-full featured_wrapper p-0">
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
            <div class="title_wrapper container">
                <span class="txt-light">Trending Today</span>
                <h1 class="title txt-light fs-xxl">
                    {name}
                </h1>
                <span class="txt-light">{movie.overview}</span>
                <br />
                <br />
                <br />

                <a
                    href={`/${media_type}/${movie.id}`}
                    class="button is-medium bg-light"
                >
                    <i class="fa-solid fa-play pr-1" />
                    Watch It Now
                </a>
            </div>
        </div>
    </div>
</div>
<br />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;800&display=swap");

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
