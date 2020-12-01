<script>
export let primary;
export let secondary;
export let dark;
export let outline;
</script>

<button
  class:primary
  class:secondary
  class:dark
  class:outline
> 
  <slot />
</button>

<style>
button {
  display: inline-block;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

button:hover {
  transform: scale(0.95);
}

.primary {
  background: var(--colorPrimary);
  color: #fff;
}

.secondary {
  background: var(--colorSecondary);
  color: #fff;
}

.dark {
  background: var(--colorDark);
  color: #fff;
}

.outline {
  background: transparent;
  border: 1px solid #fff;
}
</style>
