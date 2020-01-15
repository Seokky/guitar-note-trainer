<template>
  <div class="wrapper">
    <h1 class="title">Guitar Note Trainer</h1>

    <ModeChanger v-model="mode" />

    <IntervalChanger v-model="interval" />
  </div>
</template>

<script>
import ModeChanger from './ModeChanger.vue';
import IntervalChanger from './IntervalChanger.vue';

export default {
  name: 'SettingsPanel',

  components: {
    ModeChanger,
    IntervalChanger,
  },

  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      mode: this.value.mode,
      interval: this.value.interval,
    };
  },

  computed: {
    settings() {
      return {
        mode: this.mode,
        interval: this.interval,
      };
    },
  },

  watch: {
    settings(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 20vh;
  min-height: 200px;
  padding: 1%;
  display: flex;
  flex-direction: column;

  .title {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
