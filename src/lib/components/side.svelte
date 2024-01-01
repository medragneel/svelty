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
            <span class="logo">ST</span>
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

            <a href="/" class="side--nav__link">
                <i class="bx bx-cog"></i>
            </a>
        </div>
    </nav>
</div>

<style>
    #nav,
    .side--nav__list {
        z-index: 99;
    }
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

    :root {
        /*Color mode HSL(hue, saturation, lightness)*/
        --first-color: hsl(228, 81%, 49%);
        --title-color: hsl(228, 12%, 15%);
        --text-color: hsl(228, 8%, 50%);
        --body-color: hsl(228, 100%, 99%);
        --container-color: #fff;

        /*========== Font and typography ==========*/
        /*.5rem = 8px | 1rem = 16px ...*/
        --body-font: "Poppins", sans-serif;
        --normal-font-size: 0.938rem;
    }

    /* Responsive typography */
    @media screen and (min-width: 968px) {
        :root {
            --normal-font-size: 1rem;
        }
    }

    @media screen and (max-width: 767px) {
        .side--nav__logo {
            display: none;
        }

        .side--nav__list {
            position: fixed;
            bottom: 2rem;
            background-color: var(--container-color);
            box-shadow: 0 8px 24px hsla(228, 81%, 24%, 0.15);
            width: 90%;
            padding: 30px 40px;
            border-radius: 1rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 36px;
            transition: 0.4s;
        }
    }

    .side--nav__link {
        display: flex;
        color: var(--text-color);
        font-weight: 500;
        transition: 0.3s;
    }

    .side--nav__link i {
        font-size: 1.25rem;
    }

    .side--nav__link:hover {
        color: var(--first-color);
    }

    /* Active link */
    .active-link {
        color: var(--first-color);
    }

    @media screen and (max-width: 320px) {
        .side--nav__list {
            column-gap: 20px;
        }
    }

    /* For medium devices */
    @media screen and (min-width: 576px) {
        .side--nav__list {
            width: 332px;
        }
    }

    @media screen and (min-width: 767px) {
        .side--nav {
            position: fixed;
            left: 0;
            background-color: var(--container-color);
            box-shadow: 1px 0 4px hsla(228, 81%, 49%, 0.15);
            width: 84px;
            height: 200vh;
            padding: 2rem;
            transition: 0.3s;
        }
        .side--nav__logo {
            display: flex;
        }
        .side--nav__logo span {
            font-size: 1.5rem;
            color: var(--first-color)
        }
        .side--nav__logo,
        .side--nav__link {
            align-items: center;
            column-gap: 2rem;
        }
        .side--nav__list {
            display: grid;
            row-gap: 2.5rem;
            margin-top: 10.5rem;
        }
        .side--nav__content {
            overflow: hidden;
            height: 100%;
        }
    }

    /* For 2K & 4K resolutions */
    @media screen and (min-width: 2048px) {
        body {
            zoom: 1.7;
        }
    }

    @media screen and (min-width: 3840px) {
        body {
            zoom: 2.5;
        }
    }
</style>
