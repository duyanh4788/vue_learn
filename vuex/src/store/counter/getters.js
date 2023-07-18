export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(_, getters) {
    const final = getters.finalCounter;
    if (final < 0) return 0;
    if (final > 100) return 100;
    return final;
  },
};
