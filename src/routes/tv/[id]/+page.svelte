<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import { media } from "$lib/api.js";
    import { fade, blur } from "svelte/transition";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

    const servers = [
        {
            name: "vidsrc",
            link: "https://vidsrc.to/embed/tv/",
        },
        {
            name: "vidsrc2",
            link: "https://vidsrc.me/embed/tv?tmdb=",
        },
        {
            name: "smashyStream",
            link: "https://embed.smashystream.com/playere.php?tmdb=",
            params: { season: 1, episode: 1 },
        },
        {
            name: "superEmbed",
            link: "https://multiembed.mov/?video_id=",
            params: { tmdb: 1, s: 1, e: 1 },
        },
    ];

    export let data;
</script>

<Header movie={data.movie} trailer={data.trailer} name={data.movie.name} />

<div class="container">
    <div class="overview">
        <h1 class="align-center p-1">Description</h1>
        <p class="p-1">{data.movie.overview}</p>
    </div>
    <br />
    <br />
    {#if data.movie.credits.cast.length > 0}
        <div class="cast">
            <h1 class="align-center p-2">Cast</h1>
            <center>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        autoWidth: true,
                        gap: "0.5rem",
                        pagination: false,
                    }}
                    aria-label="My Favorite Images"
                >
                    {#each data.movie.credits.cast as castMember (castMember.id)}
                        <SplideSlide>
                            <div class="cast-member card">
                                <img
                                    style="border-radius: 50%;"
                                    src={media(castMember.profile_path, 200)}
                                    alt={castMember.id.toString()}
                                />
                                <p>{castMember.name}</p>
                                <em class="txt-disabled"
                                    >{castMember.character}</em
                                >
                            </div>
                        </SplideSlide>
                    {/each}
                </Splide>
            </center>
        </div>
    {/if}
    <div class="container">
        <h1 class="align-center py-2">Watch links</h1>
        <div class="links carousel">
            {#each servers as server}
                <a
                    class="btn btn-dark"
                    href={`${server.link}${data.movie.id}${
                        server.params
                            ? `&${Object.entries(server.params)
                                  .map(([key, value]) => `${key}=${value}`)
                                  .join("&")}`
                            : ""
                    }`}
                    target="show"
                >
                    <i class="fa-solid fa-play pr-1" />
                    {server.name}
                </a>
            {/each}
        </div>
    </div>
    <br />
    <br />

    <center>
        <div class="iframe-container">
            <iframe
                src={`https://vidsrc.to/embed/movie/${data.movie.id}`}
                title={data.movie.id.toString()}
                sandbox="allow-same-origin allow-forms allow-scripts allow-presentation allow-orientation-lock"
                allow="encrypted-media"
                allowfullscreen
                frameborder="0"
                name="show"
            ></iframe>
        </div>
    </center>

    <br />
    <br />

    <dl class="data container">
        <dt>Released</dt>
        <dd>{data.movie.release_date}</dd>

        <dt>Runtime</dt>
        <dd>{data.movie.runtime} minutes</dd>

        <dt>Budget</dt>
        <dd>${Math.round(data.movie.budget / 1e6)}M</dd>

        <dt>Revenue</dt>
        <dd>${Math.round(data.movie.revenue / 1e6)}M</dd>

        <dt>Genre</dt>
        <dd class="genres">
            {#each data.movie.genres as genre (genre.id)}
                <span>{genre.name}, </span>
            {/each}
        </dd>
    </dl>
</div>
<br />
<br />

{#if data.movie.recommendations.results.length > 0}
    <br />
    <br />

    <div class="py-3 container" transition:fade>
        <h1 class="py-1">You Might Like</h1>
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
            {#each data.movie.recommendations.results as movie}
                <SplideSlide>
                    <a href={`/tv/${movie.id}`}>
                        <img
                            src={media(movie.poster_path, 200)}
                            alt={movie.title}
                            transition:blur
                        />
                    </a>
                </SplideSlide>
            {/each}
        </Splide>
    </div>
{/if}

<style>
    .cast-member {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .cast-member img {
        width: 110px;
        height: 110px;
        object-fit: cover;
    }

    .iframe-container {
        overflow: hidden;
        padding-top: 56.25%; /* 16:9*/
        position: relative;
    }

    .iframe-container iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    img {
        border-radius: 0.75em;
    }

    .data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
    }

    dt,
    dd {
        line-height: 1;
    }

    dt {
        text-transform: uppercase;
        font-size: 0.8rem;
        top: 0.2rem;
        opacity: 0.8;
    }

    dd {
        margin: 0;
    }

    .genres {
        grid-column: 2/5;
    }

    @media (min-width: 45em) {
        .data {
            display: grid;
            grid-template-columns: max-content 1fr max-content 1fr;
            gap: 1em;
        }
    }

    @media (min-width: 60em) {
        .data {
            height: 0;
        }
    }
</style>
