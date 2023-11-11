<script>
  export let classes = '';
</script>

<button class="{classes} base-button-style"><slot /></button>

<style>
  .base-button-style {
    background-color: blue;
    color: red;
  }
</style>
