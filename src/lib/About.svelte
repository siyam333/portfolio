<script>
    import face from "../assets/about/face.jpeg";
    export let theme1
    if(theme1==false){
        theme1=!theme1
    }
    else{
        theme1=false
    }
    let  one, two, three, four, five;
    function entry() {
        one.style = `transform:translateY(0em);opacity:1;`;
        
        four.style = `transform:translateY(0em);opacity:1;`;
        five.style = `transform:translateY(0em);opacity:1;`;
    }
    function exit() {
        one.style = `transform:translateY(2em)`;
        
        four.style = `transform:translateY(2em)`;
        five.style = `transform:translateY(2em)`;
    }
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

<body id="abt">
    <div class="img">
        <img src={face} alt="" />
    </div>
    <main>
        <div class="doin">
            <div class="w2">
                <div class="idea">
                    <div bind:this={one}>
                        <p>Driven to uncover my true passion, I'm exploring various fields.</p>
                    </div>
                    
                    <div
                        bind:this={four}
                        use:viewport
                        on:entry={entry}
                        on:exit={exit}
                    >
                        <p>
                            Currently, I am <span class="self"
                                >self-learning</span
                            >
                            full-stack development using
                            <span class="open"> open-source resources</span>
                        </p>
                    </div>
                    <div bind:this={five}>to broaden my horizons.</div>
                </div>
            </div>
        </div>
    </main>
</body>

<style>
    body {
        position: relative;
        overflow: hidden;
    }
    .img {
        position: absolute;
        width: 100vw;
        height: 80vh;
        overflow: hidden;
        z-index: -9999;
    }
    .img > img {
        object-fit: cover;
        height: 80vh;
        width: 100vw;
        opacity: 0.5;
    }
    main {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 80vh;
    }
    .doin {
        padding: 1em;
        display: flex;
        flex-direction: column;
        width: 45vw;
        height: 80vh;
        font-family: "Bebas Neue", cursive;
        gap: 1em;
        font-size: 2.5em;
    }

    /* .idea {
        font-size: 1.9em;
    } */
    p {
        margin: 0;
    }

    .idea > div:nth-child(1) {
        transform: translateY(2em);
        opacity: 0;
        transition: all 1.7s;
    }
    .idea > div:nth-child(2) {
        transform: translateY(2em);
        opacity: 0;
        transition: all 2s;
    }
    .idea > div:nth-child(3) {
        transform: translateY(2em);
        opacity: 0;
        transition: all 3s;
    }
    .idea > div:nth-child(4) {
        transform: translateY(2em);
        opacity: 0;
        transition: all 4s;
    }
    .idea > div:nth-child(5) {
        transform: translateY(2em);
        opacity: 0;
        transition: all 5s;
    }
    .self {
        color: rgb(227, 221, 42);
    }
    .open {
        color: red;
    }

    @media screen and (max-width: 56.75em) {
        .doin {
            font-size: 1.8em;
        }
        
    }
    @media screen and (max-width: 30em) {
        .doin {
            font-size: 1.3em;
        }
    }
</style>
