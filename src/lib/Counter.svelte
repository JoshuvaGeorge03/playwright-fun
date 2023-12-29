<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<div>
  Count {count}
</div>
<button on:click={increment}>
  increment it
</button>
