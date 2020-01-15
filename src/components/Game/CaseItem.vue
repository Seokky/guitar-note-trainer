<template functional>
  <div class="wrapper">
    <span class="label">{{ props.label }}</span>
    <span class="value">{{ props.value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 50px;

  .label {
    flex-basis: 40%;
    background: #2c3e50;
    color: white;
    font-size: 26px;
    font-weight: 100;
    line-height: 1.8em;
  }

  .value {
    flex-grow: 1;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.5em;
    border: 2px solid #2c3e50;
  }
}
</style>
