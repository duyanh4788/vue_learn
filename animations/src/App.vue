<template>
  <router-view v-slot="slotProps">
    <transition name="demo-two" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: isAnimate }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      name="demo-one"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @enter-cancelled="onEnterCancelled"
      @leave-cancelled="onLeaveCancelled"
    >
      <p v-if="isOne">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        inventore corrupti quo. Odio, tenetur provident! Consequuntur hic ipsa
        natus vitae, molestiae quasi obcaecati nobis assumenda, porro est
        necessitatibus, labore veniam.
      </p>
    </transition>
    <button @click="demoOne">demo01</button>
  </div>
  <div class="container">
    <p v-if="isTwo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore
      corrupti quo. Odio, tenetur provident! Consequuntur hic ipsa natus vitae,
      molestiae quasi obcaecati nobis assumenda, porro est necessitatibus,
      labore veniam.
    </p>
    <transition name="demo-two" mode="out-in">
      <button @click="showTwo" v-if="!isTwo">Show</button>
      <button @click="hideTwo" v-else>Hide</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
// import ListData from './components/ListData.vue';
export default {
  components: {
    // ListData,
  },
  data() {
    return {
      dialogIsVisible: false,
      isAnimate: false,
      isOne: false,
      isTwo: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
    },
    onEnter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 5);
    },
    onAfterEnter() {
      console.log('onAfterEnter');
    },
    onBeforeLeave(el) {
      el.style.opacity = 1;
    },
    onLeave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 5);
    },
    onAfterLeave(el) {
      console.log(el);
    },
    onEnterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    onLeaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.isAnimate = !this.isAnimate;
    },
    demoOne() {
      this.isOne = !this.isOne;
    },
    showTwo() {
      this.isTwo = true;
    },
    hideTwo() {
      this.isTwo = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 1s ease-out forwards;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */
.demo-one-enter-active {
  /* transition: all 0.5s; */
  animation: slide-fade 0.3s ease-in;
}

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
.demo-one-leave-active {
  /* transition: all 0.2s ease-in; */
  animation: slide-fade 0.3s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  60% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
.demo-two-enter-from,
.demo-two-leave-to {
  opacity: 0;
}

.demo-two-enter-active {
  transition: opacity 0.3s ease-out;
}

.demo-two-leave-active {
  transition: opacity 0.3s ease-in;
}

.demo-two-enter-to,
.demo-two-leave-from {
  opacity: 1;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}
.route-enter-to {
}

.route-leave-from {
}
.route-leave-active {
  animation: slide-fade 0.4s ease-in;
}
.route-leave-to {
}
</style>
