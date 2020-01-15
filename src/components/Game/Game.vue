<template>
  <div class="main">
    <progress
      class="progressBar"
      :max="progressBarMaxValue"
      :value="progressBarCounter"
    />

    <div
      v-if="settings.mode === 'notes'"
      class="caseWrapper"
    >
      <CaseItem
        label="String:"
        :value="string"
      />
      <CaseItem
        label="Note:"
        :value="note"
      />
    </div>

    <div
      v-else
      class="caseWrapper"
    >
      <CaseItem
        label="Shape:"
        :value="shape"
      />
      <CaseItem
        label="Chord:"
        :value="chord"
      />
    </div>

    <button @click="manuallySetRandomCase">
      Next one
    </button>
  </div>
</template>

<script>
import CaseItem from '@/components/Game/CaseItem.vue';
import {
  getRandomString,
  getRandomNote,
  getRandomShape,
  getRandomChord,
} from '@/randomHelpers';

export default {
  name: 'Game',

  components: {
    CaseItem,
  },

  props: {
    settings: {
      type: Object,
      required: true,
    },
    isGameRunning: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    string: '',
    note: '',
    shape: '',
    chord: '',
    progressBarCounter: 0,
    progressBarTimer: 0,
    timer: 0,
  }),

  watch: {
    isGameRunning(val) {
      if (val) {
        this.onGameStart();
      } else {
        this.onGameStop();
      }
    },
  },

  computed: {
    progressBarMaxValue() {
      return this.settings.interval / 1000;
    },
  },

  methods: {
    onGameStart() {
      this.setRandomCase();
      this.timer = setInterval(this.setRandomCase, this.settings.interval);
    },
    onGameStop() {
      window.clearInterval(this.timer);
      window.clearInterval(this.progressBarTimer);
      this.timer = 0;
      this.progressBarTimer = 0;
    },
    setRandomCase() {
      if (this.settings.mode === 'notes') {
        this.string = getRandomString();
        this.note = getRandomNote();
      } else {
        this.shape = getRandomShape();
        this.chord = getRandomChord();
      }

      if (this.isGameRunning) {
        this.restartProgressBar();
      }
    },
    manuallySetRandomCase() {
      if (this.timer) {
        this.$emit('need-restart', this.setRandomCase);
      } else {
        this.setRandomCase();
      }
    },
    restartProgressBar() {
      clearInterval(this.progressBarTimer);

      this.progressBarCounter = this.settings.interval / 1000;

      this.progressBarTimer = setInterval(() => {
        this.progressBarCounter -= 1;
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  padding-top: 0;

  .progressBar {
    width: 100%;
    height: 4px;
    margin-bottom: 40px;
  }

  .caseWrapper {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
