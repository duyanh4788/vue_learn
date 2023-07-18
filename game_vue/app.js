const randomVal = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      montersHealth: 100,
      playersHealth: 100,
      currentAttrack: false,
      currentHealth: false,
      statusGame: false,
      stopGame: false,
      timerSpecial: 0,
      timerHealth: 0,
      battleLog: [],
    };
  },
  methods: {
    playGame(value) {
      this.statusGame = value;
    },
    monsterAttack() {
      if (!this.statusGame) return;
      const kill = randomVal(3, 12);
      this.playersHealth -= kill;
      this.addLog("MONSTER", "ATTACK", kill);
    },
    playersAttack() {
      if (!this.statusGame) return;
      const kill = randomVal(5, 15);
      this.montersHealth -= kill;
      this.addLog("PLAYERS", "ATTACK", kill);
    },
    specicalAttack() {
      this.timerSpecial = 3;
      this.currentAttrack = true;
      const kill = randomVal(10, 25);
      this.montersHealth -= kill;
      this.monsterAttack();
      this.addLog("PLAYERS", "SPECIAL ATTACK", kill);
    },
    increHealthPlayers() {
      if (this.playersHealth === 100) return;
      this.timerHealth = 5;
      this.currentHealth = true;
      const calPlayers =
        this.playersHealth + 10 >= 100 ? 100 : this.playersHealth + 10;
      const calMonters =
        this.montersHealth + 5 >= 100 ? 100 : this.montersHealth + 5;
      this.playersHealth = calPlayers;
      this.montersHealth = calMonters;
      this.addLog("MONSTER", "INCRE HEALTH", 10);
      this.addLog("PLAYERS", "INCRE HEALTH", 5);
    },
    resetGame() {
      this.montersHealth = 100;
      this.playersHealth = 100;
      this.currentAttrack = false;
      this.currentHealth = false;
      this.statusGame = false;
      this.stopGame = false;
    },
    surrender() {
      this.stopGame = true;
      this.playersHealth = 0;
    },
    addLog(value, action, number) {
      this.battleLog.push({ key: randomVal(10, 25), value, action, number });
    },
  },
  computed: {
    renderMontersHealth() {
      return { width: `${this.montersHealth}%` };
    },
    renderPlayersHealth() {
      return { width: `${this.playersHealth}%` };
    },
    renderTimerHealth() {
      if (!this.timerHealth) return null;
      return this.timerHealth;
    },
    renderTimerSpecial() {
      if (!this.timerSpecial) return null;
      return this.timerSpecial;
    },
  },
  watch: {
    currentAttrack() {
      if (!this.currentAttrack) return;
      if (this.currentAttrack) {
        if (this.timerSpecial >= 0) {
          const i = setInterval(() => {
            if (!this.currentAttrack) {
              clearInterval(i);
              this.timerSpecial = 0;
              return;
            }
            this.timerSpecial--;
          }, 1000);
        }
        const t = setTimeout(() => {
          this.currentAttrack = false;
        }, 3000);
        if (!this.currentAttrack) {
          clearTimeout(t);
        }
      }
    },
    currentHealth() {
      if (!this.currentHealth) return;
      if (this.currentHealth) {
        if (this.timerHealth >= 0) {
          const i = setInterval(() => {
            if (!this.currentHealth) {
              clearInterval(i);
              this.timerHealth = 0;
              return;
            }
            this.timerHealth--;
          }, 1000);
        }
        const t = setTimeout(() => {
          this.currentHealth = false;
        }, 5000);

        if (!this.currentHealth) {
          clearTimeout(t);
        }
      }
    },
    statusGame() {
      if (!this.statusGame) return;
      if (this.statusGame) {
        const t = setInterval(() => {
          this.monsterAttack();
          if (this.montersHealth < 0 || this.playersHealth < 0) {
            this.montersHealth =
              this.montersHealth < 0 ? 0 : this.montersHealth;
            this.playersHealth =
              this.playersHealth < 0 ? 0 : this.playersHealth;
            this.statusGame = false;
            this.stopGame = true;
            clearInterval(t);
            return;
          }
        }, 1000);
      }
    },
  },
});

app.mount("#game");
