<script>
    import "$lib/styles/app.css";
    import Side from "$lib/components/side.svelte";
    let toggleActive = false;
    function toggle() {
        toggleActive = !toggleActive;
    }
</script>

<!-- <nav class="nav px-1"> -->
<!--     <div class="logo"> -->
<!--         <a href="/" class="txt-dark"> -->
<!--             <span>Svelty</span> -->
<!--         </a> -->
<!--     </div> -->
<!--     <a class="hamburger" href="?" on:click={toggle}> -->
<!--         <span class="bar bar1 bg-dark" /> -->
<!--         <span class="bar bar2 bg-dark" /> -->
<!--         <span class="bar bar3 bg-dark" /> -->
<!--     </a> -->
<!---->
<!--     <div class={`nav-links ${toggleActive ? "active" : ""}`}> -->
<!--         <ul> -->
<!--             <li><a href="/">Home</a></li> -->
<!--             <li><a href="/search">search</a></li> -->
<!--             <li><a href="/tv">Tv</a></li> -->
<!--         </ul> -->
<!--     </div> -->
<!-- </nav> -->

<Side />

<div class="side-container">
    <slot />
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
