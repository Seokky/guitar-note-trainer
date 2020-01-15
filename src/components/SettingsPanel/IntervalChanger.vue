<template>
  <label class="intervalChanger">
    <span class="title">Autoswitching interval (if enabled):</span>

    <select
      v-model="interval"
      class="field"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        v-text="option.name"
      />
    </select>
  </label>
</template>

<script>
import { autoswitchingConfig } from '@/config';

export default {
  name: 'IntervalChanger',

  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      interval: this.value,
    };
  },

  computed: {
    options() {
      const optionsCount = autoswitchingConfig.MAX_INTERVAL - autoswitchingConfig.MIN_INTERVAL;
      const emptyOptions = Array(optionsCount).fill(0);

      return emptyOptions.map((option, idx) => {
        const pureValue = idx * 1000;
        const valueWithOffset = pureValue + autoswitchingConfig.MIN_INTERVAL * 1000;

        return {
          value: valueWithOffset,
          name: `${idx + autoswitchingConfig.MIN_INTERVAL} s`,
        };
      });
    },
  },

  watch: {
    interval(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  .intervalChanger {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    font-size: 14px;

    .title {
      padding-left: 10px;
    }

    .field {
      padding: 5px 10px;
      margin-left: 6px;
      border: none;
      border-left: 1px solid lightgray;
    }
  }
</style>
