<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import { media } from "$lib/api.js";
    import { fade } from "svelte/transition";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
    import { writable } from "svelte/store";

    const servers = [
        { name: "vidsrc.pro", link: "https://vidsrc.pro/embed/tv/" },
        { name: "vidsrc.to", link: "https://vidsrc.to/embed/tv/" },
        // ... other servers
    ];

    let selectedSeason = writable(1);
    let selectedEpisode = writable(1);
    let seasons = [];

    export let data;

    $: if (data.movie.seasons) {
        seasons = data.movie.seasons;
        $selectedSeason = 1;
        $selectedEpisode = 1;
    }

    let currentServer = servers[0];

    function changeServer(server) {
        currentServer = server;
    }

    $: currentSeason = seasons[$selectedSeason - 1] || null;
    $: episodes = currentSeason?.episodes || [];
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
</div>
<div class="container">
    {#if seasons.length > 0}
        <div class="seasons-container">
            <h2>Seasons</h2>
            <div class="season-buttons">
                {#each seasons as season (season.season_number)}
                    <button
                        class="btn btn-dark"
                        on:click={() =>
                            ($selectedSeason = season.season_number)}
                    >
                        Season {season.season_number}
                    </button>
                {/each}
            </div>
        </div>

        {#if episodes.length > 0}
            <div class="episodes-container">
                <h2>Episodes</h2>
                <div class="episode-grid">
                    {#each episodes as episode (episode.episode_number)}
                        <button

                            class="btn btn-dark"
                            on:click={() =>
                                ($selectedEpisode = episode.episode_number)}
                        >
                            Episode {episode.episode_number}
                        </button>
                    {/each}
                </div>
            </div>
        {:else}
            <p>No episodes available for this season.</p>
        {/if}

        <div class="server-container">
            <h2>Watch Server</h2>
            <div class="server-buttons">
                {#each servers as server}
                    <button
                        class="btn btn-dark"
                        on:click={() => changeServer(server)}
                    >
                        {server.name}
                    </button>
                {/each}
            </div>
        </div>
        <br/>
        <br/>


        <div class="iframe-container">
            <iframe
                src={`${currentServer.link}${data.movie.id}/${$selectedSeason}/${$selectedEpisode}`}
                title={`${data.movie.name} S${$selectedSeason}E${$selectedEpisode}`}
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    {:else}
        <p>No seasons available for this show.</p>
        <br />
        <br />
    {/if}
</div>
<br />
<br />
<br />

<div class="container">
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
                            transition:fade
                        />
                    </a>
                </SplideSlide>
            {/each}
        </Splide>
    </div>
{/if}

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .overview {
        margin-bottom: 1.5rem;
    }

    .seasons-container,
    .episodes-container,
    .server-container {
        margin-bottom: 2rem;
    }

    .season-buttons,
    .server-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .episode-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1rem;
    }



    @media (max-width: 640px) {
        .episode-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

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
    /* Add this to your global CSS file or as a <style> tag in your Svelte component */

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }
</style>
