<script>
    import Rot from "../assets/project/rot2.png";
    import Port from "../assets/project/portfolio.png";
    import Arrow from "../assets/project/arrow.png";
    let pro1, pro2;
    function entry() {
        document.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) {
                let top = pro1.getBoundingClientRect().top;
                let value = top / 16;
                if (value <= 18.75) {
                    pro1.style = `transform:rotate(0deg);translateX(-6em);transition:all 1s;`;
                    pro2.style = `transform:rotate(0deg);translateX(6em);transition:all 1s;`;
                }
            }
        });
    }
    function exit() {}
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const event = entry.isIntersecting ? "entry" : "exit";
            entry.target.dispatchEvent(new CustomEvent(event));
        });
    });
    function viewport(element) {
        observer.observe(element);
    }
</script>

<body id="project">
    <h2 class="heading">Projects</h2>
    <div class="wrap" use:viewport on:entry={entry} on:exit={exit}>
        <div class="project" bind:this={pro1}>
            <div class="img"><img src={Port} alt="" /></div>
            <div class="prohead">
                <div class="heading-sub">
                    <h2>Portfolio</h2>
                    <div>
                        <a href="https://siyam333.github.io/portfolio/" target="_blank" rel="noreferrer"><img src={Arrow} class="arrow" alt="" /></a>
                    </div>
                </div>
                <p>a simple portfolio page made with svelte</p>
            </div>
        </div>
        <div class="project" bind:this={pro2}>
            <div class="img"><img src={Rot} alt="" /></div>
            <div class="prohead">
                <div class="heading-sub">
                    <h2>Region of Tournments</h2>
                    <div>
                        <a href="https://github.com/Rajaniraiyn/rot-landing-page" target="_blank" rel="noreferrer"><img src={Arrow} class="arrow" alt="" /></a>
                    </div>
                    
                </div>
                <p>Platform to create a gaming community</p>
            </div>
        </div>
    </div>
</body>

<style>
    body {
        width: 100vw;
        font-size: 2em;
        /* font-family: "Noto Serif Display", serif; */
    }
    .heading {
        display: flex;

        justify-content: center;
        align-items: center;
        font-weight: 1000;
        font-size: 5em;
        font-family: "Bebas Neue", cursive;
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        padding: 2em;
        margin-bottom: 1em;
    }
    .project {
        width: 17em;
        height: 24em;
        background-color: rgb(41, 41, 41);
        overflow: hidden;
        border: 0.1em solid white;
    }
    .wrap > .project:nth-child(1) {
        transform: rotate(10deg) translate(6em, -5em);
    }
    .wrap > .project:nth-child(2) {
        transform: rotate(-10deg) translate(-6em, -4em);
    }
    .img {
        position: absolute;
        width: 17em;
        height: 24em;
        overflow: hidden;
    }

    .img > img {
        width: 17em;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        opacity: 0.85;
        transform: scale(1);
        transition: all 1s;
    }
    .prohead {
        position: absolute;
        z-index: 9999;
        color: aliceblue;
        padding: 0.7em;
        width: 17em;
    }
    .prohead > div > h2 {
        font-size: 1em;
        font-family: "Bebas Neue", cursive;
    }
    .prohead > p {
        font-size: 0.7em;
    }
    .heading-sub {
        display: flex;
        padding: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
    }
    .arrow {
        height: 2em;
        width: 2em;
        filter: invert(1);
    }
    .arrow:hover {
        transform: scale(1.1);
        transition: transform 0.3s;
    }

    .project:hover .img > img {
        transform: scale(1.1);
        opacity: 1;
        transition: all 1s;
    }

    @media screen and (max-width: 53.5em) {
        .heading {
            font-size: 3em;
        }
        .img {
            width: 15em;
            height: 22em;
        }
        .project {
            width: 15em;
            height: 22em;
        }
        .prohead {
            width: 15em;
        }
        .img > img {
            width: 15em;
        }
    }
    @media screen and (max-width: 38em) {
        .img {
            width: 15em;
            height: 20em;
        }
        .project {
            width: 15em;
            height: 20em;
        }
        .prohead {
            width: 15em;
        }
        .img > img {
            width: 15em;
        }
        .prohead > div > h2 {
            font-size: 0.7em;
        }
        .prohead > p {
            font-size: 0.5em;
        }
    }
    @media screen and (max-width: 30em) {
        .heading {
            font-size: 2.5em;
        }
        .img {
            width: 10em;
            height: 15em;
        }
        .project {
            width: 10em;
            height: 15em;
        }
        .prohead {
            width: 10em;
            padding: 0.3em;
        }
        .img > img {
            width: 10em;
        }
        .heading-sub {
            gap: 0.3em;
        }
        .heading-sub > h2 {
            font-size: 0.7em;
        }
        .arrow {
            height: 1em;
            width: 1em;
        }
        .wrap > .project:nth-child(1) {
            transform: rotate(0deg) translateX(0em);
        }
        .wrap > .project:nth-child(2) {
            transform: rotate(0deg) translateX(0em);
        }
        .wrap {
            padding: 0.3em;
        }
    }
</style>
