<template>
  <label class="modeChanger">
    <span class="title">Mode:</span>

    <select
      v-model="mode"
      class="field"
    >
      <option value="notes">Notes</option>
      <option value="chords">Chords</option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'notes',
    },
  },

  data() {
    return {
      mode: this.value,
    };
  },

  watch: {
    mode(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  .modeChanger {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid gray;

    .title {
      padding-left: 10px;
      font-size: 18px;
    }

    .field {
      padding: 5px 10px;
      margin-left: 6px;
      font-size: 18px;
      border: none;
      border-left: 1px solid gray;
    }
  }
</style>
