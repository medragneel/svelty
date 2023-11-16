<script lang="ts">
    import { media } from "$lib/api.js";
    import "$lib/styles/global.css";
    export let data;
</script>

<div class="container p-3">
    <h1 class="align-center">Sarch For A Movie / TvShow</h1>
    <br />
    <br />

    <center>
        <form>
            <input
                type="text"
                name="query"
                placeholder="Search for Movie / Tvshow"
                bind:value={data.query}
            />
        </form></center
    >

    <br />
    <br />

    {#if data.query}
        <div class="container">
            <div class="grid">
                {#each data.movies as movie (movie.id)}
                    {#if movie.media_type === "movie"}
                        <a href={`/movie/${movie.id}`}>
                            <img
                                src={media(movie.poster_path, 200)}
                                alt={movie.title}
                            />
                        </a>
                    {:else}
                        <a href={`/tv/${movie.id}`}>
                            <img
                                src={media(movie.poster_path, 200)}
                                alt={movie.title}
                            />
                        </a>
                    {/if}
                {/each}
            </div>
            <br />
        </div>
    {/if}
</div>
