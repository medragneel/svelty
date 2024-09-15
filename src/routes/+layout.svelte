<script>
    import "../app.css";
    import "$lib/styles/app.css";
    import Side from "$lib/components/side.svelte";
    import { injectAnalytics } from "$lib/analytics";
    import { browser } from "$app/environment";
    if (browser) {
        injectAnalytics();
    }
</script>

<Side></Side>
<div class="side-container">
    <slot></slot>
</div>

<br />
<br />
<br />
<br />

<footer>
    <center>
        Made By <b
            ><a href="https://medmh.netlify.app/" target="_blank">@Medmh</a></b
        >
    </center>
</footer>
<br />
<br />

<style>
    @media screen and (min-width: 767px) {
        .side-container {
            margin-left: 3rem;
        }
    }
</style>
