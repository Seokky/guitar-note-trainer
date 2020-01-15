<template functional>
  <div class="wrapper">
    <button
      class="controlButton"
      @click="listeners['start']"
    >
      Start!
    </button>
    <button
      class="controlButton"
      @click="listeners['stop']"
    >
      Stop
    </button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;

  .controlButton:last-of-type {
    margin-left: 10px;
  }
}
</style>
