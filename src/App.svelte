<script>
import Home from "./Pages/Home.svelte";
import Footer from "./Layout/Footer.svelte";
import Navbar from "./Layout/Navbar.svelte";
import { router, routes } from "./Stores/router";
import Features from "./Pages/Features.svelte";
import Docs from "./Pages/Docs.svelte";
import Button from "./Components/Button.svelte";
import Meta from "./Components/Meta.svelte";
import Theme from "./Theme/Theme.svelte";
</script>

<Meta />
<Theme />

<!-- Testy -->
<Button secondary>Hello</Button>
<Button outline l-icon="fas-car">Hello</Button>
<Button outline r-icon="fas-clock">Hello</Button>
<!-- Koniec Testów -->


<Navbar />

{#if $router === routes[0]}
  <Home />
{/if}

{#if $router === routes[1]}
  <Features />
{/if}

{#if $router === routes[2]}
  <Docs />
{/if}

<Footer />
