movies<script>
    import { onMount } from "svelte";

    const trendingMovies = [
        {
            title: "Inception",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "The Dark Knight",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "Interstellar",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "Pulp Fiction",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "The Matrix",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "Forrest Gump",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
    ];

    const popularMovies = [
        { title: "Avatar", imageUrl: "/placeholder.svg?height=350&width=250" },
        { title: "Titanic", imageUrl: "/placeholder.svg?height=350&width=250" },
        {
            title: "Star Wars",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "Avengers: Endgame",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "Jurassic World",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
        {
            title: "The Lion King",
            imageUrl: "/placeholder.svg?height=350&width=250",
        },
    ];

    export let movies;
    export let title;
    export let href;

    let carouselRefs = {};

    function handleScroll(carouselId, direction) {
        const container = carouselRefs[carouselId];
        if (container) {
            const scrollAmount = direction === "left" ? -250 : 250;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }

    function updateButtonState(event) {
        const target = event.target;
        const leftButton = target.parentNode.querySelector(".left-button");
        const rightButton = target.parentNode.querySelector(".right-button");

        if (leftButton && rightButton) {
            leftButton.disabled = target.scrollLeft === 0;
            rightButton.disabled =
                target.scrollLeft >=
                target.scrollWidth - target.clientWidth - 10;
        }
    }

    onMount(() => {
        Object.values(carouselRefs).forEach((ref) => {
            ref.addEventListener("scroll", updateButtonState);
        });
    });
</script>

<div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-8">Movie App</h1>

    {#each [{ title: "Trending Movies", movies: trendingMovies }, { title: "Popular Movies", movies: popularMovies }] as { title, movies }}
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">{title}</h2>
            <div class="relative">
                <div
                    bind:this={carouselRefs[title]}
                    class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style="scrollbar-width: none; -ms-overflow-style: none;"
                >
                    {#each movies as movie, index}
                        <div class="snap-start shrink-0 w-[250px] p-2">
                            <div
                                class="relative h-[350px] w-full rounded-lg overflow-hidden group"
                            >
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    class="w-full h-full object-cover"
                                />
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <p class="text-white p-4 font-semibold">
                                        {movie.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
                <button
                    class="left-button absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    on:click={() => handleScroll(title, "left")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    class="right-button absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    on:click={() => handleScroll(title, "right")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    {/each}
</div>

<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
</style>
