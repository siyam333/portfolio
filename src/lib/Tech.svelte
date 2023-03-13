<script>
    import Js from "../assets/tech/js.svg";
    import Html from "../assets/tech/html.svg";
    import Css from "../assets/tech/css.svg";
    import C from "../assets/tech/c.svg";
    import Pyt from "../assets/tech/python.svg";
    import Sve from "../assets/tech/svelte.svg";
    import {onMount} from "svelte"
    let box1, box2, box3, box4, box5, box6;
    export let theme1
    let dummy=true
    onMount(()=>{
        if(dummy==true){
            theme1=false
            dummy=false
        }
        else if(theme1==false){
        theme1=!theme1
    }
    else{
        theme1=false
    }
    })
    
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

<div class="main" id="tech" class:mode={theme1==true}>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>JAVASCRIPT</h2>
                    <p>
                        I'm passionate about programming and scripting with
                        JavaScript and am excited to continue learning.While I'm
                        confident in my beginner-level skills, I'm eager to dive
                        deeper into advanced topics like API integrations and
                        data structures.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>HTML</h2>
                    <p>
                        I am familar with HTML, but it's a vast sea of tags and
                        attributes. As I continue to learn, I'm discovering
                        useful coding techniques and shortcuts that make the
                        process more efficient. I'm excited about the progress
                        and that drives me.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>CSS</h2>
                    <p>
                        I dont prefer to use css frameworks, just css is a
                        beauty. Well even it has shortcuts where i am learning
                        and improvising every day.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>C</h2>
                    <p>
                        I worked on C programming for 3 months but i must get to
                        know more about it to enrich my knowledge(need a big
                        revamp).
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>PYTHON</h2>
                    <p>
                        The simplest lang where i came across in my life and i
                        have a basic knowledge and 1 year of experience with SQL
                        database too.Further i am planning to learn the API's in
                        python which helps in AI and DS.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div
        class="box" class:boxmode={theme1==true}
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
                <div class="reveal" class:revealmode={theme1==true}>
                    <h2>SVELTE</h2>
                    <p>
                        The only framework i use and made me to love it. The
                        idea of surgical injection is too good.I have been
                        working on with svelte and have a good understing about
                        it.
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
        background: black;
        scroll-behavior: smooth;
    }
    .mode{
        
        background: rgb(219, 242, 246);
        background: radial-gradient(
            circle,
            rgba(219, 242, 246, 1) 20%,
            rgba(212, 229, 232, 1) 34%,
            rgba(205, 221, 224, 1) 46%,
            rgba(189, 206, 209, 1) 62%,
            rgba(198, 211, 214, 1) 78%,
            rgba(177, 189, 191, 1) 100%
        );
    }
    .box {
        width: 19.8em;
        height: 25em;
        display: flex;
        flex-wrap: wrap;
        margin: 1.25rem;
        align-content: center;
        background-color: rgba(58, 56, 61, 0.7);
        box-shadow: 0rem 0rem 2.1rem rgb(53, 53, 53);
        border-radius: 0.5rem;
        transition: 1s;
        overflow: hidden;
    }
    .boxmode{
        

        background-color: rgba(5, 4, 7, 0.7);
        box-shadow: 0rem 0rem 2.1rem rgb(0, 0, 0);
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
        background-color: rgb(126, 126, 126);
    }
    .boxmode:hover{
        
        background-color: rgba(161, 176, 179);
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
        color: rgb(229, 250, 254);
        gap: 1em;
    }
    .revealmode{
        color: black;
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
