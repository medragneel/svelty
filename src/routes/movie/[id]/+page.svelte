<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import type { Genre } from "$lib/types/movies";

    const servers = [
        {
            name: "vidsrc.pro",
            link: "https://vidsrc.pro/embed/movie/",
        },
        {
            name: "vidsrc.to",
            link: "https://vidsrc.to/embed/movie/",
        },
        {
            name: "vidsrc.me",
            link: "https://vidsrc.me/embed/movie?tmdb=",
        },
        { name: "autoembed", link: "https://player.autoembed.cc/embed/movie/" },
    ];
    export let data;
    const genres: Genre[] = data.movie.genres;
</script>

<Header movie={data.movie} name={data.movie.title} />

<div class="container">
    <div class="overview">
        <h1 class="align-center p-1">Description</h1>
        <p class="p-1">{data.movie.overview}</p>
    </div>
    <br />
    <div class="cast">
        <h1 class="align-center p-2">Cast</h1>
        <center> </center>
    </div>
    <br />
    <div class="container">
        <h1 class="align-center py-2">Watch links</h1>
        <div class="links carousel">
            {#each servers as server}
                <a
                    class="btn btn-dark"
                    href={`${server.link}${data.movie.id}`}
                    target="movie"
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
                name="movie"
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
            {#each genres as genre (genre.id)}
                <span>{genre.name}, </span>
            {/each}
        </dd>
    </dl>
</div>
<br />
<br />

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
