<script>
    import Rot from "../assets/project/rot2.png";
    import Port from "../assets/project/portfolio.png";
    import Arrow from "../assets/project/arrow.png";
    let pro1, pro2;
    function entry() {
        document.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) {
                let top = pro1.getBoundingClientRect().top;
                let value=top/16
                if (value <= 18.75 ) {
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
    <h2 class="heading">PROJECTS</h2>
    <div class="wrap" use:viewport on:entry={entry} on:exit={exit}>
        <div class="project" bind:this={pro1}>
            <div class="img"><img src={Port} alt="" /></div>
            <div class="prohead">
                <div class="heading-sub">
                    <h2>Portfolio</h2>
                    <img src={Arrow} class="arrow" alt="" />
                </div>
                <p>a simple portfolio page mage with svelte</p>
            </div>
        </div>
        <div class="project" bind:this={pro2}>
            <div class="img"><img src={Rot} alt="" /></div>
            <div class="prohead">
                <div class="heading-sub">
                    <h2>Region of Tournments</h2>
                    <img src={Arrow} class="arrow" alt="" />
                </div>
                <p>Platform to create a gaming community</p>
            </div>
        </div>
    </div>
</body>

<style>
    /* @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@800&display=swap"); */
    body {
        width: 100vw;
        font-size: 2em;
        /* font-family: "Noto Serif Display", serif; */
    }
    .heading {
        display: flex;
        padding: 2.5em;
        justify-content: center;
        align-items: center;
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        padding: 2em;
    }
    .project {
        width: 20em;
        height: 27em;
        background-color: rgb(41, 41, 41);
        overflow: hidden;
        border: 0.1em solid white;
    }
    .wrap > .project:nth-child(1) {
        transform: rotate(10deg) translateX(6em);
    }
    .wrap > .project:nth-child(2) {
        transform: rotate(-10deg) translateX(-6em);
    }
    .img {
        position: absolute;
        width: 20em;
        height: 27em;
        overflow: hidden;
    }
    .img > img {
        width: 20em;
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
        width: 20em;
    }
    .prohead > div > h2 {
        font-size: 1em;
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

    .project:hover .img > img {
        transform: scale(1.1);
        opacity: 1;
        transition: all 1s;
    }

    @media screen and (max-width: 53.5em) {
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
        .img {
            width: 10em;
            height: 20em;
        }
        .project {
            width: 10em;
            height: 20em;
        }
        .prohead {
            width: 10em;
        }
        .img > img {
            width: 10em;
        }
        .heading-sub>h2{
            font-size: 0.7em;
        }
        .wrap > .project:nth-child(1) {
            transform: rotate(0deg) translateX(0em);
        }
        .wrap > .project:nth-child(2) {
            transform: rotate(0deg) translateX(0em);
        }
        .wrap{
            padding: 0.3em;
        }
    }
</style>
