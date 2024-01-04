<script lang="ts">
    import { onMount } from "svelte";

    let current_theme: string;
    function set_theme(theme: string) {
        const one_year = 60 * 60 * 24 * 365;
        document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
        document.documentElement.setAttribute("data-theme", theme);
        current_theme = theme;
    }

    onMount(() => {
        const saved_theme = document.documentElement.getAttribute("data-theme");
        if (saved_theme) {
            current_theme = saved_theme;
            return;
        }

        const preference_is_dark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        const theme = preference_is_dark ? "dark" : "light";
        set_theme(theme); // TODO
    });
    function toggle_theme(): void {
        const theme = current_theme === "light" ? "dark" : "light";
        set_theme(theme);
    }
</script>

<br />
<br />
<br />

<center>
    <h1>Settings</h1>
    <br />
    <br />
    <div class="theme-switcher">
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
</center>

<style>
    .theme-switcher {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
