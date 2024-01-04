<script>
    import { onMount } from "svelte";

    let activeLink = null;

    function colorLink(event) {
        const linkColors = document.querySelectorAll(".side--nav__link");
        linkColors.forEach((l) => l.classList.remove("active-link"));
        event.target.classList.add("active-link");
        activeLink = event.target;
    }

    onMount(() => {
        const linkColors = document.querySelectorAll(".side--nav__link");
        linkColors.forEach((l) => l.addEventListener("click", colorLink));
    });
</script>

<div class="side--nav" id="nav">
    <nav class="side--nav__content">
        <a href="/" class="side--nav__logo">
            <span class="logo">S</span>
        </a>

        <div class="side--nav__list">
            <a href="/" class="side--nav__link active-link">
                <i class="bx bx-grid-alt"></i>
            </a>

            <a href="/search" class="side--nav__link">
                <i class="bx bx-search"></i>
            </a>

            <a href="/tv" class="side--nav__link">
                <i class="bx bx-tv"></i>
            </a>

            <a href="/settings" class="side--nav__link">
                <i class="bx bx-cog"></i>
            </a>
        </div>
    </nav>
</div>


