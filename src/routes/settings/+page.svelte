<script lang="ts">
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";

    let current_theme: string;

    function set_theme(theme: string) {
        const one_year = 60 * 60 * 24 * 365;
        document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
        document.documentElement.setAttribute("data-theme", theme);
        current_theme = theme;
    }

    onMount(() => {
        // Retrieve the theme from cookies
        const theme_cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("theme="));
        if (theme_cookie) {
            const saved_theme = theme_cookie.split("=")[1];
            current_theme = saved_theme;
            document.documentElement.setAttribute("data-theme", saved_theme);
            return;
        }

        // Fallback to system preference
        const preference_is_dark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const theme = preference_is_dark ? "dark" : "light";
        set_theme(theme);
    });

    function toggle_theme(): void {
        const theme = current_theme === "light" ? "dark" : "light";
        set_theme(theme);
    }
    export let data;
</script>

<br />
<br />
<br />

<center>
    <h1>Settings</h1>
    <br />
    <br />
    <div class="display theme-switcher">
        <b>Switch Theme</b>

        <button
            aria-label="toggle theme"
            class="btn btn-dark"
            on:click={toggle_theme}
        >
            {#if current_theme === "dark"}
                <i class="bx bx-sun"></i>
            {:else}
                <i class="bx bx-moon"></i>
            {/if}
            {current_theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
    <br />
    <br />


</center>

<style>
    .display {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .bx {
        padding: 0.25rem;
        font-size: 1rem;
    }
</style>
