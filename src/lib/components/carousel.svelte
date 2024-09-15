<script lang="ts">
    import { onMount } from "svelte";

    interface Movie {
        id: number;
        title: string;
        poster_path: string;
    }

    interface MovieList {
        results: Movie[];
    }

    export let movies: MovieList;
    export let title: string;
    export let href: string | null = null;

    let containerRef: HTMLElement;
    let leftButton: HTMLButtonElement;
    let rightButton: HTMLButtonElement;

    const CARD_WIDTH = 200; // Width of each movie card
    const CARD_MARGIN = 16; // Total horizontal margin of each card (8px on each side)
    const SCROLL_AMOUNT = CARD_WIDTH + CARD_MARGIN; // Amount to scroll for each button click

    function media(path: string, size: number): string {
        return `https://image.tmdb.org/t/p/w${size}${path}`;
    }

    function handleScroll(direction: "left" | "right") {
        if (containerRef) {
            const scrollAmount =
                direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
            containerRef.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }

    function updateButtonState() {
        if (containerRef) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef;
            leftButton.disabled = scrollLeft <= 0;
            rightButton.disabled = scrollLeft + clientWidth >= scrollWidth;
        }
    }

    onMount(() => {
        if (containerRef) {
            containerRef.addEventListener("scroll", updateButtonState);
            updateButtonState(); // Initial state update
        }

        return () => {
            if (containerRef) {
                containerRef.removeEventListener("scroll", updateButtonState);
            }
        };
    });
</script>

<div class="mb-8 container">
    <h2 class="text-lg px-4 mb-4 flex justify-between">
        <p class="font-semibold">
            {title} |
        </p>
        {#if href}
            <a {href} class="text-sm ml-2 text-blue-500 font-semibold"
                >See More</a
            >
        {/if}
    </h2>
    <div class="relative">
        <div
            bind:this={containerRef}
            class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style="scroll-behavior: smooth;"
        >
            {#each movies.results as movie, index (movie.id)}
                <div
                    class="carousel-item flex-shrink-0 w-[200px] snap-start mx-2"
                >
                    <div
                        class="relative h-[300px] w-full rounded-lg overflow-hidden group"
                    >
                        <a href="/movie/{movie.id}">
                            <img
                                src={media(movie.poster_path, 200)}
                                alt={movie.title}
                                class="w-full h-full object-cover"
                                loading={index < 5 ? "eager" : "lazy"}
                            />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <p class="text-white p-2 text-sm font-semibold">
                                    {movie.title}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
