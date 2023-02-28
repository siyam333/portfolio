<script>
  import Header from "./lib/header.svelte";
  import About from "./lib/About.svelte";
  import Tech from "./lib/Tech.svelte";
  import Project from "./lib/Project.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <Header />
  <About />
  <Tech />
  <Project />
  <Footer />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Changa+One&family=Maven+Pro&family=Trirong:wght@200&display=swap');

  :root {
    background-color: rgb(8, 8, 8);
    color: aliceblue;
    font-family: 'Maven Pro', sans-serif;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
</style>
