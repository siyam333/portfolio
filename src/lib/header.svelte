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
  import menu from "../assets/header/menu.svg";
  
  import About from "../lib/About.svelte";
  import Tech from "../lib/Tech.svelte";
  import Project from "../lib/Project.svelte";
  import Footer from "../lib/Footer.svelte";
  
  let first,
    second,
    third,
    top,
    sidemenu,
    button,
    lmenu,
    smenu,
    mode,
    modecircle;
  let active = false;
  document.addEventListener("load",()=>{
    movecircle=false
  })
  let movecircle = false;
  
  function reveal() {
    button.addEventListener("click", () => {
      let width = document.body.clientWidth;
      if (active == false) {
        active = !active;
      } else if (width <= 680) {
        active = false;
      } else {
        active = false;
      }
    });
  }
  onMount(() => {
    reveal();
    mode.addEventListener("mousedown", () => {
      if (movecircle == false) {
        movecircle = !movecircle;
        document.documentElement.style.setProperty('transition', 'all 0.7s');
        document.documentElement.style.setProperty('color', '#000000');
        document.documentElement.style.setProperty('background-color', 'rgb(229, 250, 254)');
        
      } else {
        movecircle = false;
        document.documentElement.style.setProperty('transition', 'all 0.7s');
        document.documentElement.style.setProperty('color', 'rgb(229, 250, 254)');
        document.documentElement.style.setProperty('background-color', '#000000');
      }
    });
    let width = document.body.clientWidth;
    if (width <= 680) {
      lmenu.parentNode.removeChild(lmenu);
    } else {
      lmenu.parentNode.appendChild(lmenu);
    }
  });

  const scrollToElement = ({ target }) => {
    const el = document.getElementById(target.href.split("#").at(-1));
    el.scrollIntoView({
      behavior: "smooth",
    });
    if (active == true) {
      active = !active;
    }
  };

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

<body id="top">
  <div class="sidebarwrap" class:show={active == true} class:sidemode={movecircle==true}>
    <div class="sidebar " bind:this={sidemenu}>
      <ul class="dropmenu">
        <li bind:this={top}>
          <a
            data-tinro-ignore
            on:click|preventDefault={scrollToElement}
            href="#top" class:sidelinkmode={movecircle==true}> HOME</a
          >
        </li>
        <li>
          <a
            data-tinro-ignore
            on:click|preventDefault={scrollToElement}
            href="#abt" class:sidelinkmode={movecircle==true}>ABOUT</a
          >
        </li>
        <li>
          <a
            data-tinro-ignore
            on:click|preventDefault={scrollToElement}
            href="#tech" class:sidelinkmode={movecircle==true}>TECH STACKS</a
          >
        </li>
        <li>
          <a
            data-tinro-ignore
            on:click|preventDefault={scrollToElement}
            href="#project" class:sidelinkmode={movecircle==true}>PROJECTS</a
          >
        </li>

        <li>
          <a
            data-tinro-ignore
            on:click|preventDefault={scrollToElement}
            href="#contact" class:sidelinkmode={movecircle==true}>CONTACT</a
          >
        </li>
      </ul>
    </div>
  </div>
  <header>
    <ul bind:this={lmenu} class="lmenu">
      <li>
        <a class:linkmode={movecircle==true}
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#top">HOME</a
        >
      </li>
      <li>
        <a class:linkmode={movecircle==true}
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#abt">ABOUT</a
        >
      </li>
      <li>
        <a class:linkmode={movecircle==true}
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#tech">TECH STACKS</a
        >
      </li>
      <li>
        <a class:linkmode={movecircle==true}
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#project">PROJECTS</a
        >
      </li>

      <li>
        <a class:linkmode={movecircle==true}
          data-tinro-ignore
          on:click|preventDefault={scrollToElement}
          href="#contact">CONTACT</a
        >
      </li>
    </ul>
    <ul class="menuicon" bind:this={smenu}>
      <li><img bind:this={button} src={menu} alt="" /></li>
    </ul>
    <div class="wrapmode">
      <div class="mode" bind:this={mode}>
        <div
          class="circle"
          bind:this={modecircle}
          class:move={movecircle == true}
        />
      </div>
    </div>
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
<About theme1={movecircle}/>
<Tech theme1={movecircle}/>
<Project theme1={movecircle}/>
<Footer theme1={movecircle}/>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Changa+One&family=Maven+Pro&family=Trirong:wght@200&display=swap');

:root {
  background-color: rgb(8, 8, 8);
  color: rgb(229, 250, 254);
  font-family: 'Maven Pro', sans-serif;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
  header {
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.581);
    backdrop-filter: blur(1em);
    z-index: 9999;
  }
  header > .lmenu {
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
  header > .lmenu > li {
    list-style: none;
  }
  .linkmode{
    color: black;
  }
  header > .lmenu > li > a {
    text-decoration: none;
    color: aliceblue;
    font-weight: 600;
  }
  
  header > .lmenu > li {
    font-weight: 600;
  }
  .wrapmode {
    height: 10vh;
    width: 3.5em;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1em;
    align-items: center;
    justify-content: center;
  }
  .mode {
    width: 3em;
    height: 1.5em;
    border: 2px solid white;
    border-radius: 1.1em;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0.2em;
    justify-content: flex-start;
    transform: translateX(0em);
    transition: transform 0.5s;
  }
  .mode:hover {
    cursor: pointer;
  }

  .circle {
    height: 1.2em;
    width: 1.2em;
    background-color: aliceblue;
    border-radius: 50%;
    transition: transform 0.3s;
  }
  .move {
    transform: translateX(1.7em);
    transition: transform 0.3s;
    background-color: rgb(227, 221, 42);
  }
  .menuicon {
    visibility: hidden;
    display: none;
    z-index: 999999;
  }

  .menuicon > li > img {
    width: 2em;
  }
  .sidebarwrap {
    position: fixed;
    top: 10vh;
    bottom: 0;
    height: 90vh;
    width: 100vw;
    background-color: rgb(0, 0, 0);
    z-index: 99999;
    transform: translateX(-100vw);
    transition: transform 0.1s ease-in;
  }
  .show {
    transform: translateX(0vw);
    transition: transform 0.4s ease-in;
  }
  .sidemode{
    background-color: rgb(229, 250, 254);
    
  }
  .dropmenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    gap: 1em;
  }
  .dropmenu > li {
    list-style: none;
  }
  .dropmenu > li > a {
    text-decoration: none;
    color: rgb(229, 250, 254);
    font-size: 2em;
    font-weight: 600;
  }
  .dropmenu > li>.sidelinkmode{
    color: rgb(0, 0, 0);
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
  }
  main > h2:nth-child(1) {
    font-size: 3em;
  }
  main > h2:nth-child(2) {
    font-size: 2.5em;
  }
  main > h2:nth-child(2) > span {
    font-family: "Lobster Two", cursive;
    color: rgb(255, 0, 0);
    font-weight: bolder;
    font-size: 1.3em;
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
  @media screen and (max-width: 42.5em) {
    .about {
      height: 35vh;
      row-gap: 0.3em;
    }
    header > .lmenu {
      display: none;
      visibility: hidden;
    }
    .menuicon {
      visibility: visible;
      margin-right: 3em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 10vh;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 2em;
      padding-inline-start: 0px;
    }
    .menuicon > li {
      list-style: none;
    }
    .menuicon > li > img:hover {
      cursor: pointer;
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
    main > h2:nth-child(2) > span {
      font-size: 1em;
    }
  }
</style>
