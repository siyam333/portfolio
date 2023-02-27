<script>
    import Js from "../assets/tech/js.svg";
    import Html from "../assets/tech/html.svg";
    import Css from "../assets/tech/css.svg";
    import C from "../assets/tech/c.svg";
    import Pyt from "../assets/tech/python.svg";
    import Sve from "../assets/tech/svelte.svg";
    import { onMount } from "svelte";
    let hidden;
    let box1, box2, box3, box4, box5, box6;

    function entry(b) {
        b.style = `opacity: 1;
        filter: blur(0); 
        transition: 2s;`;
    }
    function exit(b) {
        b.style = `opacity: 0;
        filter: blur(5px);
        transform: translateX(-100%);
        transition:0s `;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const event = entry.isIntersecting
                ? "enterViewport"
                : "exitViewport";
            entry.target.dispatchEvent(new CustomEvent(event));
        });
    });
    function viewport(element) {
        observer.observe(element);
        return {
            destroy() {
                observer.unobserve(element);
            },
        };
    }
</script>

<div class="main" id="tech">
    <div
        class="box"
        bind:this={box1}
        use:viewport
        on:enterViewport={entry(box1)}
        on:exitViewport={exit(box1)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={Js} alt="img" />
                </div>
                <div class="reveal">
                    <h2>JAVASCRIPT</h2>
                    <p>
                        I am good in a beginner level of programming/scripting
                        using JAVASCRIPT, but most importantly i love it
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box"
        bind:this={box2}
        use:viewport
        on:enterViewport={entry(box2)}
        on:exitViewport={exit(box2)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={Html} alt="img" />
                </div>
                <div class="reveal">
                    <h2>HTML</h2>
                    <p>
                        A simple standard markup language where i am familiar with but its a sea and we have shortcuts where i am on the progress of learning
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box"
        bind:this={box3}
        use:viewport
        on:enterViewport={entry(box3)}
        on:exitViewport={exit(box3)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={Css} alt="img" />
                </div>
                <div class="reveal">
                    <h2>CSS</h2>
                    <p>
                        I dont prefer to use css frameworks, just css is a beauty. Well even it has shortcuts where i am learning.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box"
        bind:this={box4}
        use:viewport
        on:enterViewport={entry(box4)}
        on:exitViewport={exit(box4)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={C} alt="img" />
                </div>
                <div class="reveal">
                    <h2>C</h2>
                    <p>
                        I worked on C programming for 3 months but i must get to know more about it to enrich my knowledge.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box"
        bind:this={box5}
        use:viewport
        on:enterViewport={entry(box5)}
        on:exitViewport={exit(box5)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={Pyt} alt="img" />
                </div>
                <div class="reveal">
                    <h2>PYTHON</h2>
                    <p>
                        The simplest lang where i came across in my life and i have a basic knowledge and 1 year of experience with SQL database too.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box"
        bind:this={box6}
        use:viewport
        on:enterViewport={entry(box6)}
        on:exitViewport={exit(box6)}
    >
        <div class="container">
            <div class="wrap">
                <div class="img">
                    <img src={Sve} alt="img" />
                </div>
                <div class="reveal">
                    <h2>SVELTE</h2>
                    <p>
                        The only framework i use and made me to love it. The idea of surgical injection is too good.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    
    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2em;
        gap: 3.5em;
        background-color: rgb(184, 184, 184);
        scroll-behavior: smooth;
    }
    .box {
        width: 19.8em;
        height: 25em;
        display: flex;
        flex-wrap: wrap;
        margin: 1.25rem;
        align-content: center;
        background-color: rgba(5, 4, 7, 0.7);
        box-shadow: 0rem 0.31rem 2.1rem rgb(0, 0, 0);
        border-radius: 0.5rem;
        transition: 1s;
        overflow: hidden;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        transition: 3s ease-in-out;
    }
    .wrap {
        margin-top: 13.25em;
    }
    .box:hover {
        background-color: #0c0c0e;
    }
    .container:hover .img {
        transform: translateY(-4.25rem);
    }
    .img {
        display: grid;
        justify-items: center;
        height: 12.5em;
        transition: 1s;
    }
    .img > img {
        width: 9.3em;
        height: 9.3em;
    }

    .reveal {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 12.5em;
        color: white;
        gap: 1em;
    }
    .reveal > h2 {
        font-weight: 1000;
    }
    .reveal > h2,
    .reveal > p {
        margin: 0 0.6rem;
        transform: translateY(0);
        transition: 0.7s;
        opacity: 0;
    }

    .container:hover .reveal > h2,
    .container:hover .reveal > p {
        opacity: 1;
        transform: translateY(-5rem);
    }
    @media screen and (max-width: 30em) {
        .box {
            width: 15em;
            height: 20em;
        }
        .img {
            display: grid;
            justify-items: center;
            height: 8em;
            transition: 1s;
        }
        .img > img {
            width: 7em;
            height: 7em;
        }
       
        .reveal > p {
        font-size: 0.7em;
    }
    }
</style>
