<script>
  import Header from "./lib/header.svelte";
  import About from "./lib/About.svelte"
  import Tech from "./lib/Tech.svelte"
  import Project from "./lib/Project.svelte"
  import Footer from "./lib/Footer.svelte"
</script>

<main>
  <Header />
  <About/>
  <Tech/>
  <Project/>
  <Footer/>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
  :root {
    background-color: rgb(8, 8, 8);
    color: aliceblue;
    font-family: "Roboto Condensed", sans-serif;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
</style>
