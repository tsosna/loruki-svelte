<script>
import { themes, currentTheme } from "../Theme/theme";

$: console.log($currentTheme)

if ($currentTheme === undefined) {
  currentTheme.change(themes.light);
} else {
  currentTheme.change($currentTheme);
}
</script>

<button
  on:click={() => {
    currentTheme.change(themes.light);
  }}
>Light</button>
<button
  on:click={() => {
    currentTheme.change(themes.dark);
  }}
>Dark</button>
<h1 style="color: var(--colorPrimary)">lorem ipsum dolor sit amet</h1>

<svelte:head>
  <!-- <meta name="theme-color" content="#ff0000" /> -->
</svelte:head>
