<script lang="ts">
    import { media } from "$lib/api";
    import type { ShowList } from "$lib/types/movies";
    import { onMount } from "svelte";

    export let shows: ShowList;
    export let title: string;
    export let href: string | null;
    let containerRef: HTMLElement;
    let leftButton: HTMLButtonElement;
    let rightButton: HTMLButtonElement;

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
            {#each shows.results as show, index (show.id)}
                <div
                    class="carousel-item flex-shrink-0 w-[200px] snap-start mx-2"
                >
                    <div
                        class="relative h-[300px] w-full rounded-lg overflow-hidden group"
                    >
                        <a href={`/tv/${show.id}`}>
                            <img
                                src={media(show.poster_path, 200)}
                                alt={show.name}
                                class="w-full h-full object-cover"
                                loading={index < 5 ? "eager" : "lazy"}
                            />
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <p class="text-white p-2 text-sm font-semibold">
                                    {show.name}
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
