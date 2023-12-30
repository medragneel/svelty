<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
    import { onMount } from "svelte";
    import { media } from "$lib/api";
    import type { MovieList } from "$lib/types/movies";

    onMount(() => {
        let items = document.querySelectorAll(".item");

        items.forEach((item) => {
            item.addEventListener("click", () => {
                items.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                    }
                });

                item.classList.toggle("active");
            });
        });
    });

    export let movies: MovieList;
    export let title: string;
    export let href: string | null;
</script>

<br />
<br />

<div class="container">
    <h2>
        {title} - {#if href}
            <a {href}>See More</a>
        {/if}
    </h2>
</div>

<section class="game-section">
    <Splide
        options={{ type: "loop", perPage: 4, perMove: 1, autoWidth: true }}
        aria-label="My Favorite Images"
    >
        {#each movies.results as movie, i (movie.id)}
            <SplideSlide>
                <div
                    class="item {i === 0 ? 'active' : ''}"
                    style="background-image: url({media(
                        movie.poster_path,
                        500,
                    )});"
                >
                    <div class="item-desc">
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</section>

<style>
    .game-section {
        padding: 60px 50px;
    }
    .game-section .item {
        margin: 0 15px 60px;
        width: 320px;
        height: 400px;
        display: flex;
        display: -webkit-flex;
        align-items: flex-end;
        -webkit-align-items: flex-end;
        background: #343434 no-repeat center center / cover;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        cursor: pointer;
    }
    .game-section .item.active {
        width: 500px;
        box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
    }
    .game-section .item:after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    .game-section .item-desc {
        padding: 0 24px 12px;
        color: #fff;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transform: translateY(calc(100% - 54px));
        -webkit-transform: translateY(calc(100% - 54px));
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
    }
    .game-section .item.active .item-desc {
        transform: none;
        -webkit-transform: none;
    }
    .game-section .item-desc p {
        opacity: 0;
        -webkit-transform: translateY(32px);
        transform: translateY(32px);
        transition: all 0.4s ease-in-out 0.2s;
        -webkit-transition: all 0.4s ease-in-out 0.2s;
    }
    .game-section .item.active .item-desc p {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        h2 {
            margin-bottom: 32px;
        }
        h3 {
            margin: 0 0 8px;
            font-size: 24px;
            line-height: 32px;
        }

        .game-section {
            padding: 50px 30px;
        }
        .game-section .item {
            margin: 0 12px 60px;
            width: 260px;
            height: 360px;
        }
        .game-section .item.active {
            width: 400px;
        }
        .game-section .item-desc {
            transform: translateY(calc(100% - 46px));
            -webkit-transform: translateY(calc(100% - 46px));
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        h2 {
            margin-bottom: 32px;
        }
        h3 {
            margin: 0 0 8px;
            font-size: 24px;
            line-height: 32px;
        }

        .game-section {
            padding: 50px 30px 40px;
        }
        .game-section .item {
            margin: 0 12px 60px;
            width: 240px;
            height: 330px;
        }
        .game-section .item.active {
            width: 360px;
        }
        .game-section .item-desc {
            transform: translateY(calc(100% - 42px));
            -webkit-transform: translateY(calc(100% - 42px));
        }
    }

    @media (max-width: 767px) {
        h2 {
            margin-bottom: 20px;
        }
        h3 {
            margin: 0 0 8px;
            font-size: 19px;
            line-height: 24px;
        }

        .game-section {
            padding: 30px 15px 20px;
        }
        .game-section .item {
            margin: 0 10px 40px;
            width: 200px;
            height: 280px;
        }
        .game-section .item.active {
            width: 270px;
            box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
            -webkit-box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
        }
        .game-section .item-desc {
            padding: 0 14px 5px;
            transform: translateY(calc(100% - 42px));
            -webkit-transform: translateY(calc(100% - 42px));
        }
    }
</style>
