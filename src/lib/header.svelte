<script>
  import { onMount } from "svelte";
  import manutd from "../assets/header/manutd.jpg";
  import aww from "../assets/header/aww.png";
  import code from "../assets/header/code.jpg";
  import figma from "../assets/header/figma.png";
  import movie from "../assets/header/movie.jpg";
  import news from "../assets/header/news.jpeg";
  import paris from "../assets/header/paris.jpg";
  import real2 from "../assets/header/real2.jpg";
  import rot from "../assets/header/rot.png";
  import Road from "../assets/header/road.png";
  import css from "../assets/header/css.png";
  import mdn from "../assets/header/mdn.png";
  import stack from "../assets/header/stack.png";

  let header, first, second, third, top, y;

  onMount(() => {
    top.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  });

  const scrollToElement = ({ target }) => {
    const el = document.getElementById(target.href.split("#").at(-1));
    el.scrollIntoView({
      behavior: "smooth",
    });
  };

  //   const scroller = new LocomotiveScroll({
  //   el: document.querySelector('[data-scroll-container]'),
  //   smooth: true
  // });

  function entry() {
    document.addEventListener("scroll", () => {
      const transformValue = window.scrollY * 0.2;
      first.style = `transform:translateX(${transformValue}px);transition:all 1s`;
      second.style = `transform:translateX(-${transformValue}px);transition:all 1s`;
      third.style = `transform:translateX(${transformValue}px);transition:all 1s`;
    });
  }
  function exit() {}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const event = entry.isIntersecting ? "enterViewport" : "exitViewport";
      entry.target.dispatchEvent(new CustomEvent(event));
    });
  });
  function viewport(element) {
    observer.observe(element);
  }
</script>

<svelte:window bind:scrollY={y} />
<body>
  <header bind:this={header}>
    <ul>
      <li bind:this={top}><a href="#0">HOME</a></li>
      <li>
        <a
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#abt">ABOUT</a
        >
      </li>
      <li>
        <a
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#tech">TECH STACKS</a
        >
      </li>
      <li>
        <a
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#project">PROJECTS</a
        >
      </li>

      <li>
        <a
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#contact">CONTACT</a
        >
      </li>
    </ul>
  </header>

  <main>
    <h2>Hey, SIYAM here</h2>
    <h2>Front-End <span>web</span> Developer</h2>
    <h2>Technophile | <span>Astute</span></h2>
  </main>
  <div
    class="abtwrap"
    use:viewport
    on:enterViewport={entry}
    on:exitViewport={exit}
  >
    <div class="about">
      <div class="child" bind:this={first}>
        <div><img src={news} alt="" /></div>
        <div><img src={mdn} alt="" /></div>
        <div><img src={aww} alt="" /></div>
        <div><img src={stack} alt="" /></div>
      </div>
      <div
        class="child"
        bind:this={second}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
      >
        <div><img src={paris} alt="" /></div>
        <div><img src={manutd} alt="" /></div>

        <div><img src={Road} alt="" /></div>
        <div><img src={real2} alt="" /></div>

        <div><img src={css} alt="" /></div>
      </div>
      <div class="child" bind:this={third}>
        <div><img src={movie} alt="" /></div>
        <div><img src={code} alt="" /></div>
        <div><img src={figma} alt="" /></div>
        <div><img src={rot} alt="" /></div>
      </div>
    </div>
  </div>
</body>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap");
  header {
    width: 100vw;
    position: fixed;
    background-color: black;
    z-index: 99999;
  }
  header > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    height: 10vh;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  header > ul > li {
    list-style: none;
  }
  header > ul > li > a {
    text-decoration: none;
    color: aliceblue;
    font-weight: 600;
  }
  header > ul > li {
    font-weight: 600;
  }

  main {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    font-family: "Changa One", cursive;
  }
  main > h2 {
    margin: 0;
    /* font-weight: 1000; */
  }
  main > h2:nth-child(1) {
    font-size: 3em;
    /* font-weight: 1000; */
  }
  main > h2:nth-child(2) {
    font-size: 2.5em;
    /* font-weight: 1000; */
  }
  main > h2:nth-child(2) > span {
    font-family: "Lobster Two", cursive;
    color: red;
  }
  main > h2:nth-child(3) > span {
    color: rgb(227, 221, 42);
  }
  .abtwrap {
    overflow: hidden;
  }
  .about {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 100vw;
    min-width: 50vw;
    justify-content: center;
    align-items: center;
    transform: rotate(15deg);
  }
  .child {
    display: flex;
    gap: 1em;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    will-change: transform;
  }
  .child > div {
    height: 20vw;
    width: 28vw;
    overflow: hidden;
    display: grid;
    justify-content: center;
  }

  img {
    height: 20vw;
    width: 29vw;
  }
  .about > .child:nth-child(2) > div:nth-child(2) > img {
    height: 30vw;
    width: 27vw;
  }
  .about > .child:nth-child(2) > div:nth-child(3) > img {
    height: 24vw;
    width: 30vw;
  }
  .about > .child:nth-child(1) > div:nth-child(4) > img {
    height: 20vw;
    width: 30vw;
  }
  .about > .child:nth-child(1) > div:nth-child(2) > img {
      width: 40vw;
    }
  @media screen and (max-width: 87.5em) {
    .about {
      height: 80vh;
    }
  }
  @media screen and (max-width: 52.5em) {
    .about {
      height: 40vh;
    }
  }
  @media screen and (max-width: 43.5em) {
    .about {
      height: 35vh;
      row-gap: 0.3em;
    }
  }
  @media screen and (max-width: 30em) {
    .about {
      height: 50vh;
      
    }
    main > h2:nth-child(1) {
      font-size: 2.5em;
    }
    main > h2:nth-child(2) {
      font-size: 2em;
    }

    header > ul > li > a {
      text-decoration: none;
      color: aliceblue;
      font-size: 0.8em;
      font-weight: 600;
    }

    .child > div {
      height: 20vh;
      width: 28vh;
      
    }
    img {
      height: 20vh;
      width: 29vh;
    }
    .about > .child:nth-child(2) > div:nth-child(2) > img {
      height: 30vh;
      width: 27vh;
    }
    .about > .child:nth-child(2) > div:nth-child(3) > img {
      height: 20vh;
      width: 30vh;
    }
    .about > .child:nth-child(1) > div:nth-child(4) > img {
      height: 20vh;
      width: 30vh;
    }
    .about > .child:nth-child(1) > div:nth-child(2) > img {
      width: 37vh;
    }
  }
</style>
