<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import "$lib/styles/global.css";
    import { media } from "$lib/api.js";
    import type {Genre} from '$lib/types/movies'

    export let data;
    const genres: Genre[] = data.movie.genres
</script>

<Header movie={data.movie} trailer={data.trailer} name={data.movie.title} />

<div class="container">
    <div class="overview">
        <h1 class="align-center p-1">Description</h1>
        <p class="p-1">{data.movie.overview}</p>
    </div>
    <br />
    <br />
    <div class="container">
        <h1 class="align-center py-2">Watch links</h1>
        <div class="links carousel">
            <a
                class="btn btn-dark"
                href={`https://vidsrc.to/embed/movie/${data.movie.id}`}
                target="_blank"
            >
                <i class="fa-solid fa-play pr-1" />
                vidsrc
            </a>
            <a
                class="btn btn-dark"
                href={`https://multiembed.mov/?video_id=${data.movie.id}&tmdb=1`}
                target="_blank"
            >
                <i class="fa-solid fa-play pr-1" />
                superEmbed</a
            >
            <a
                class="btn btn-dark"
                href={`https://seez.su/movie/${data.movie.id}`}
                target="_blank"
            >
                <i class="fa-solid fa-play pr-1" />
                seez.su</a
            >
            <a
                class="btn btn-dark"
                href={`https://vidsrc.me/embed/movie?tmdb=${data.movie.id}`}
                target="_blank"
            >
                <i class="fa-solid fa-play pr-1" />
                vidsrc2</a
            >
        </div>
    </div>
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
        {#each genres as genre (genre.id) }
            <span>{genre.name}, </span>

        {/each}
        </dd>
    </dl>
</div>
<br />
<br />

{#if data.movie.recommendations.results.length > 0}
    <div class="py-3 container">
        <h1 class="py-1">You Might Like</h1>
        <div class="carousel">
            {#each data.movie.recommendations.results as movie}
                <a href={`/movie/${movie.id}`}>
                    <img
                        src={media(movie.poster_path, 200)}
                        alt={movie.title}
                    />
                </a>
            {/each}
        </div>
    </div>
{/if}

<style>
    img {
        border-radius: 0.75em;
    }
    .data {
        display: grid;
        grid-template-columns: max-content 1fr;
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
