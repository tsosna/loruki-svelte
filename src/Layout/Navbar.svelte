<script>
import { router, routes } from "../Stores/router";
</script>

Navbar
<ul>
  {#each routes as route}
    <li><button on:click={() => router.navigate(route)}>{route}</button></li>
  {/each}
</ul>
