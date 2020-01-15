<template>
  <div>
    <SettingsPanel v-model="settings" />

    <Game
      :settings="settings"
      :is-game-running="isGameRunning"
      @need-restart="onRestartNeeded"
    />

    <GameStateControls
      @start="start"
      @stop="stop"
    />
  </div>
</template>

<script>
import SettingsPanel from '@/components/SettingsPanel/SettingsPanel.vue';
import Game from '@/components/Game/Game.vue';
import GameStateControls from '@/components/GameStateControls.vue';
import { autoswitchingConfig, gameConfig } from '@/config';

export default {
  name: 'Home',

  components: {
    SettingsPanel,
    Game,
    GameStateControls,
  },

  data: () => ({
    settings: {
      mode: gameConfig.DEF_MODE, // notes | chords
      interval: autoswitchingConfig.DEF_INTERVAL * 1000,
    },
    isGameRunning: false,
  }),

  watch: {
    'settings.mode': function () {
      if (this.isGameRunning) {
        this.restart();
      }
    },
    'settings.interval': function () {
      if (this.isGameRunning) {
        this.restart();
      }
    },
  },

  methods: {
    start() {
      this.isGameRunning = true;
    },
    stop() {
      this.isGameRunning = false;
    },
    restart(callback) {
      this.stop();

      if (callback) {
        callback();
      }

      setTimeout(this.start, 0);
    },
    onRestartNeeded(callback) {
      this.restart(callback);
    },
  },
};
</script>
