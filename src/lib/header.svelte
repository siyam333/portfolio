<script>
  import { onMount } from "svelte";
  import Manu from "../assets/header/manu.jpeg";
  import real from "../assets/header/real.jpeg";
  import news from "../assets/header/news.jpeg";
  import setup from "../assets/header/setup.jpg";
  import movie from "../assets/header/movie.jpg";
  import code from "../assets/header/code.jpg";
  import aww from "../assets/header/aww.png";
  import figma from "../assets/header/figma.png";
  import real2 from "../assets/header/real2.jpg";
  import travel from "../assets/header/travel.jpg";
  import rot from "../assets/header/rot.png";
  
  let header,
    first,
    second,
    third,
    top,
    y;
  
    onMount(()=>{
      top.addEventListener("click",()=>{
    window.scrollTo({top:0})
  })
    })
  
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
  

    document.addEventListener("scroll",()=>{
      const transformValue = window.scrollY * 0.1;
      first.style = `transform:translateX(${transformValue}px);transition:all 1s`
      second.style = `transform:translateX(-${transformValue}px);transition:all 1s`
      third.style = `transform:translateX(${transformValue}px);transition:all 1s`
    })
    

    
  }
  function exit() {
    
  }
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
      <li bind:this={top} ><a href="#0">HOME</a> </li>
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
    <h2>HEY, SIYAM here</h2>
    <h2>FRONT-END <span>web</span> developer</h2>
    <h2>TECHNOPHILE | <span>ASTUTE</span></h2>
  </main>
  <div
    class="abtwrap"
    use:viewport
    on:enterViewport={entry}
    on:exitViewport={exit}
  >
    <div class="about">
      <div class="child" bind:this={first}>
        <div><img src={Manu} alt="" /></div>
        <div><img src={real} alt="" /></div>
        <div><img src={aww} alt="" /></div>
      </div>
      <div
        class="child"
        bind:this={second}
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
      >
        <div><img src={news} alt="" /></div>
        <div><img src={setup} alt="" /></div>
        <div><img src={real2} alt="" /></div>
        <div><img src={travel} alt="" /></div>
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
  header > ul > li{
    font-weight: 600;
  }
  
  main {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
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
  /* .about>.child:nth-child(2){
    transform: matrix3d(  1, 0, 0, 0,  0,  1, 0, 0, 0, 0,1,0,0,0,0,1);transition:all 1s
  } */
  img {
    height: 20vw;
    width: 28vw;
    opacity: 0.7;
  }
  @media screen and (max-width: 87.5em) {
    .about {
      height: 50vh;
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
    main > h2:nth-child(2) > span {
      font-family: "Lobster Two", cursive;
      color: red;
    }
    main > h2:nth-child(3) > span {
      color: rgb(227, 221, 42);
    }
    img {
      height: 40vw;
      width: 48vw;
      opacity: 1;
    }
    header > ul > li > a {
      text-decoration: none;
      color: aliceblue;
      font-size: 0.8em;
      font-weight: 600;
    }
   
  }
</style>
